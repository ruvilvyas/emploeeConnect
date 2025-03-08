'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Employee Connekt
          </Link>
          
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/networking" className="text-gray-700 hover:text-blue-600">
              Network
            </Link>
            <Link href="/ai-assistant" className="text-gray-700 hover:text-blue-600 flex items-center">
              <span>AI Assistant</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <Link href="/forum" className="text-gray-700 hover:text-blue-600">
              Forum
            </Link>
            <Link href="/interviews" className="text-gray-700 hover:text-blue-600">
              Interviews
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-blue-600">
              Help
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 