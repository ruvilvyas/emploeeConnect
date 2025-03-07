'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Temporary mock data
const post = {
  id: 1,
  title: "How to handle work-life balance?",
  content: "I've been struggling to maintain a good work-life balance lately. Any tips or strategies that have worked for you?",
  author: "John Doe",
  createdAt: "2 hours ago",
  tags: ["work-life", "productivity"],
  comments: [
    {
      id: 1,
      author: "Jane Smith",
      content: "I've found that setting strict boundaries and using time-blocking techniques really help.",
      createdAt: "1 hour ago",
    },
    {
      id: 2,
      author: "Mike Johnson",
      content: "Taking regular breaks and practicing mindfulness has made a big difference for me.",
      createdAt: "30 minutes ago",
    },
  ],
};

export default function Post() {
  const router = useRouter();
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment submission logic
    console.log('Comment submitted:', newComment);
    setNewComment('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:text-blue-800 mb-4"
      >
        ← Back to Forum
      </button>

      <article className="bg-white shadow rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>Posted by {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.createdAt}</span>
        </div>
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>
        
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            rows={3}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
          />
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {post.comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{comment.author}</span>
                <span className="mx-2">•</span>
                <span>{comment.createdAt}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 