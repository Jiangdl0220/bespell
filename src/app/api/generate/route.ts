import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { v4 as uuid } from "uuid";
import { getDb } from "@/db";
import { getSessionUserId } from "@/lib/auth";
import { buildCoursePrompt } from "@/lib/ai";
import { courses } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }

  const { scene, difficulty, count = 30 } = await req.json();

  if (!scene || !difficulty) {
    return NextResponse.json(
      { error: "缺少场景或难度参数" },
      { status: 400 }
    );
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "未配置 DEEPSEEK_API_KEY" },
      { status: 500 }
    );
  }

  try {
    const client = new OpenAI({
      apiKey,
      baseURL: "https://api.deepseek.com",
    });

    const completion = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content:
            "You are a JSON-only API. Return valid JSON arrays only. Never include markdown, explanations, or code blocks.",
        },
        {
          role: "user",
          content: buildCoursePrompt(scene, difficulty, count),
        },
      ],
      temperature: 0.7,
      max_tokens: 8192,
    });

    const raw = completion.choices[0]?.message?.content || "[]";
    // Strip markdown code fences if present
    const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const sentences = JSON.parse(cleaned);

    const db = getDb();
    const courseId = uuid();
    await db.insert(courses).values({
      id: courseId,
      userId,
      title: `${scene}场景对话`,
      scene,
      difficulty,
      sentences: JSON.stringify(sentences),
    });

    return NextResponse.json({ courseId, sentences });
  } catch (err) {
    console.error("AI generation failed:", err);
    return NextResponse.json(
      { error: "AI 生成失败，请检查 API Key 或稍后重试" },
      { status: 500 }
    );
  }
}
