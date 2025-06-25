import React from 'react';
import { useAuth } from '../context/AuthContext';

const StudentProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Student Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <p className="text-lg text-gray-900">{user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
            <p className="text-lg text-gray-900">{user?.rollNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Balance</label>
            <p className="text-lg text-green-600 font-semibold">₹{user?.balance?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;