import React, { useState } from 'react';
import { Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const MarkAbsence = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [reason, setReason] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setSelectedDate('');
      setReason('');
    }, 1000);
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 ml-3">Mark Absence</h1>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-green-700">Absence marked successfully!</span>
          </div>
        )}

        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
          <span className="text-yellow-700 text-sm">
            You can only mark absence for future dates (at least one day in advance)
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={tomorrow}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
              Reason (Optional)
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter reason for absence..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-semibold"
          >
            Mark Absence
          </button>
        </form>
      </div>
    </div>
  );
};

export default MarkAbsence;