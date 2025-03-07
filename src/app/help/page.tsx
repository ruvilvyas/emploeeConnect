'use client';

import React from 'react';
import Link from 'next/link';

// Temporary mock data
const helpRequests = [
  {
    id: 1,
    title: "Need help with React performance optimization",
    description: "I'm working on a large React application and experiencing performance issues. Looking for someone with expertise in React optimization.",
    department: "Engineering",
    status: "Open",
    priority: "High",
    author: "John Doe",
    createdAt: "2 hours ago",
    tags: ["react", "performance", "frontend"],
  },
  {
    id: 2,
    title: "Database migration assistance needed",
    description: "Need help migrating our PostgreSQL database to a new version. Looking for someone with database migration experience.",
    department: "Engineering",
    status: "In Progress",
    priority: "Medium",
    author: "Jane Smith",
    createdAt: "5 hours ago",
    tags: ["database", "postgresql", "migration"],
  },
];

export default function HelpRequests() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Help Requests</h1>
        <Link
          href="/help/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create Help Request
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {helpRequests.map((request) => (
            <li key={request.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Link href={`/help/${request.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                    {request.title}
                  </Link>
                  <div className="mt-2 text-sm text-gray-500">
                    {request.department} • Posted by {request.author} • {request.createdAt}
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full ${
                      request.status === 'Open' ? 'bg-green-100 text-green-800' :
                      request.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {request.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full ${
                      request.priority === 'High' ? 'bg-red-100 text-red-800' :
                      request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {request.priority} Priority
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600">{request.description}</p>
                  <div className="mt-4 flex gap-2">
                    {request.tags.map((tag) => (
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