'use client';

import React from 'react';
import Link from 'next/link';

// Temporary mock data
const interviews = [
  {
    id: 1,
    title: "Senior Software Engineer Interview at Google",
    company: "Google",
    role: "Senior Software Engineer",
    author: "John Doe",
    date: "2 weeks ago",
    difficulty: "Hard",
    experience: "Positive",
    tags: ["google", "system-design", "algorithms"],
    summary: "A comprehensive interview process focusing on system design and problem-solving skills.",
  },
  {
    id: 2,
    title: "Frontend Developer Interview at Microsoft",
    company: "Microsoft",
    role: "Frontend Developer",
    author: "Jane Smith",
    date: "1 month ago",
    difficulty: "Medium",
    experience: "Positive",
    tags: ["microsoft", "react", "frontend"],
    summary: "Technical interview focused on React and modern web development practices.",
  },
];

export default function Interviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Interview Experiences</h1>
        <Link
          href="/interviews/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Share Your Experience
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {interviews.map((interview) => (
            <li key={interview.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Link href={`/interviews/${interview.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                    {interview.title}
                  </Link>
                  <div className="mt-2 text-sm text-gray-500">
                    {interview.company} • {interview.role} • Posted by {interview.author} • {interview.date}
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full ${
                      interview.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                      interview.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {interview.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full ${
                      interview.experience === 'Positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {interview.experience} Experience
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600">{interview.summary}</p>
                  <div className="mt-4 flex gap-2">
                    {interview.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 