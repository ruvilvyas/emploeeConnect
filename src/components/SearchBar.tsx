'use client';

import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, filters: any) => void;
  placeholder?: string;
  showFilters?: boolean;
}

export default function SearchBar({ onSearch, placeholder = "Search...", showFilters = true }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    tags: '',
    date: 'all',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, filters);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="forum">Forum</option>
              <option value="interviews">Interviews</option>
              <option value="help">Help Requests</option>
            </select>

            <input
              type="text"
              value={filters.tags}
              onChange={(e) => setFilters({ ...filters, tags: e.target.value })}
              placeholder="Filter by tags (comma-separated)"
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />

            <select
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        )}
      </div>
    </form>
  );
} 