"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/course-card";

interface Course {
  id: string; title: string; scene: string; difficulty: string;
  sentenceCount: number; completed: number; progress: number;
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses").then(r => r.json()).then(data => {
      if (Array.isArray(data)) setCourses(data);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="space-y-3">
      {[1,2,3].map(i => (
        <div key={i} className="card p-5 animate-pulse">
          <div className="h-4 w-40 bg-white/5 mb-3"/>
          <div className="h-3 w-24 bg-white/5 mb-3"/>
          <div className="h-1 w-full bg-white/5"/>
        </div>
      ))}
    </div>
  );

  if (courses.length === 0) return (
    <div className="text-center py-16"><p className="text-sm opacity-20">还没有课程</p></div>
  );

  return (
    <div className="space-y-3">
      {courses.map(course => <CourseCard key={course.id} {...course} />)}
    </div>
  );
}
