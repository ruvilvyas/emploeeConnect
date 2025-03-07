'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-blue-600">Employee Connekt</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect, share experiences, and support each other in your organization.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/auth/signin"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to connect and collaborate with your colleagues
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Employee Networking */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">🤝</div>
                <h3 className="text-lg font-medium text-gray-900">Employee Networking</h3>
                <p className="mt-2 text-gray-500">
                  Ask & answer work-related queries in our collaborative forum
                </p>
              </div>

              {/* Interview Experiences */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">💼</div>
                <h3 className="text-lg font-medium text-gray-900">Interview Experiences</h3>
                <p className="mt-2 text-gray-500">
                  Share and learn from others' interview experiences
                </p>
              </div>

              {/* Help Requests */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">🆘</div>
                <h3 className="text-lg font-medium text-gray-900">Help Requests</h3>
                <p className="mt-2 text-gray-500">
                  Request and provide help across departments
                </p>
              </div>

              {/* Search & Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900">Search & Filter</h3>
                <p className="mt-2 text-gray-500">
                  Find relevant discussions with advanced search
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 