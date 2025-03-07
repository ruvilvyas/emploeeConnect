'use client';

import React from 'react';
import Link from 'next/link';

// Temporary mock data
const discussions = [
  {
    id: 1,
    title: "How to handle work-life balance?",
    author: "John Doe",
    replies: 5,
    views: 120,
    lastActivity: "2 hours ago",
    tags: ["work-life", "productivity"],
  },
  {
    id: 2,
    title: "Best practices for remote collaboration",
    author: "Jane Smith",
    replies: 8,
    views: 200,
    lastActivity: "5 hours ago",
    tags: ["remote-work", "collaboration"],
  },
];

export default function Forum() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Forum</h1>
        <Link
          href="/forum/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create New Post
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {discussions.map((discussion) => (
            <li key={discussion.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Link href={`/forum/${discussion.id}`} className="text-lg font-medium text-blue-600 hover:text-blue-800">
                    {discussion.title}
                  </Link>
                  <div className="mt-1 text-sm text-gray-500">
                    Posted by {discussion.author} • {discussion.lastActivity}
                  </div>
                  <div className="mt-2 flex gap-2">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{discussion.replies} replies</span>
                  <span>{discussion.views} views</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 