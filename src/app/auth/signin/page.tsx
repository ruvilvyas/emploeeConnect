'use client';

import React from 'react';
import GitHubSignIn from '@/components/GitHubSignIn';
import GoogleSignIn from '@/components/GoogleSignIn';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-4">
          <GoogleSignIn />
          <GitHubSignIn />
        </div>
      </div>
    </div>
  );
} 