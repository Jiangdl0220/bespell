"use client";

import { useState, useEffect, useCallback } from "react";
import CourseCard from "@/components/course-card";

interface Course {
  id: string; title: string; scene: string; difficulty: string;
  sentenceCount: number; completed: number; progress: number;
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = useCallback(() => {
    fetch("/api/courses").then(r => r.json()).then(data => {
      if (Array.isArray(data)) setCourses(data);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchCourses(); }, [fetchCourses]);

  const handleDelete = useCallback((id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  }, []);

  if (loading) return (
    <div className="space-y-3">
      {[1,2,3].map(i => (
        <div key={i} className="card p-5 animate-pulse" style={{background:"var(--hover)"}}>
          <div className="h-4 w-40 rounded mb-3" style={{background:"var(--border)"}}/>
          <div className="h-3 w-24 rounded mb-3" style={{background:"var(--border)"}}/>
          <div className="h-1 w-full rounded" style={{background:"var(--border)"}}/>
        </div>
      ))}
    </div>
  );

  if (courses.length === 0) return (
    <div className="text-center py-16"><p className="text-sm opacity-40">词海漫漫，择一课启程</p></div>
  );

  return (
    <div className="space-y-3">
      {courses.map(course => <CourseCard key={course.id} {...course} onDelete={handleDelete} />)}
    </div>
  );
}
