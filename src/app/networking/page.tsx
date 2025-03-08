'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  imageUrl: string;
}

export default function NetworkingPage() {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - In a real app, this would come from your database
  const employees: Employee[] = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Software Engineer',
      department: 'Engineering',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'Product Manager',
      department: 'Product',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    },
    // Add more mock employees as needed
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Employee Network</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name, role, or department..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-gray-600">{employee.role}</p>
                <p className="text-gray-500 text-sm">{employee.department}</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">
                Connect
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 