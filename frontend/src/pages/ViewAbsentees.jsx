import React, { useState } from 'react';
import { Users, Calendar } from 'lucide-react';

const ViewAbsentees = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [absentees] = useState([
    { id: 1, name: 'Amit Kumar', rollNumber: '21114005', reason: 'Medical leave' },
    { id: 2, name: 'Sneha Patel', rollNumber: '21114012', reason: 'Home visit' },
    { id: 3, name: 'Rohit Singh', rollNumber: '21114018', reason: 'Interview' }
  ]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 ml-3">View Absentees</h1>
        </div>

        <div className="mb-6">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Absentees for {selectedDate}
            </h3>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              {absentees.length} students
            </span>
          </div>

          <div className="space-y-3">
            {absentees.map((student) => (
              <div key={student.id} className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.rollNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">{student.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAbsentees;