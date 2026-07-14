export function buildCoursePrompt(
  scene: string,
  difficulty: string,
  count: number,
  sentenceOffset: number = 0
): string {
  const continuation = sentenceOffset > 0
    ? `\nThis is a CONTINUATION. Start from sentence #${sentenceOffset + 1}. Continue the same conversation naturally.`
    : "";

  return `You are a senior ESL teacher. Create ${count} English sentences for a dialogue scenario.

Scene: ${scene}
Difficulty: CEFR ${difficulty}${continuation}
Requirements:
- Sentences should form a natural, coherent conversation
- Vocabulary and grammar must match CEFR ${difficulty} level
- Each sentence must include: Chinese translation (zh), English text (en), IPA pronunciation (ipa), and array of individual words with their Chinese meanings (words[])
- Return ONLY valid JSON, no markdown, no explanation

Format as JSON array:
[{
  "zh": "Chinese translation",
  "en": "English sentence",
  "ipa": "/ɪŋɡlɪʃ ˈsentəns/",
  "words": [
    {"en": "English", "zh": "Chinese meaning"},
    {"en": "sentence", "zh": "Chinese meaning"}
  ]
}]

Important: The "words" array must split the English sentence word-by-word, preserving punctuation as separate entries. Example: "Hello, world!" becomes [{"en":"Hello","zh":"你好"}, {"en":",","zh":"，"}, {"en":"world","zh":"世界"}, {"en":",","zh":"！"}]

Return ONLY the JSON array, nothing else.`;
}

// Predefined scenes for the UI
export const SCENE_PRESETS = [
  "便利店购物",
  "机场值机",
  "餐厅点餐",
  "酒店入住",
  "看病就医",
  "问路指路",
  "商务会议",
  "电话沟通",
  "面试问答",
  "日常闲聊",
  "超市购物",
  "银行办事",
  "邮局寄件",
  "租房看房",
  "健身运动",
] as const;

export const DIFFICULTY_LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
export const SENTENCE_COUNTS = [30, 50, 100] as const;

export interface Sentence {
  zh: string;
  en: string;
  ipa: string;
  words: Array<{ en: string; zh: string }>;
}
