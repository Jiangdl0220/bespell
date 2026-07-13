"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/course-card";

interface Course {
  id: string;
  title: string;
  scene: string;
  difficulty: string;
  sentenceCount: number;
  completed: number;
  progress: number;
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setCourses(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border border-[#1a1a1a]/10 p-6 animate-pulse"
          >
            <div className="h-5 w-48 bg-[#1a1a1a]/5 rounded mb-3" />
            <div className="h-3 w-24 bg-[#1a1a1a]/5 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[#1a1a1a]/40 text-lg">还没有课程，点击上方按钮开始</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
