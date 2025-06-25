import React, { useState } from 'react';
import { FileText, Save } from 'lucide-react';

const UpdateMenu = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [menu, setMenu] = useState({
    breakfast: 'Poha, Tea, Banana',
    lunch: 'Rice, Dal, Sabzi, Roti, Pickle',
    dinner: 'Rice, Rajma, Roti, Salad'
  });

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate API call
    alert('Menu updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 ml-3">Update Menu</h1>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="breakfast" className="block text-sm font-medium text-gray-700 mb-2">
                🌅 Breakfast
              </label>
              <textarea
                id="breakfast"
                value={menu.breakfast}
                onChange={(e) => setMenu({ ...menu, breakfast: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter breakfast items..."
              />
            </div>

            <div>
              <label htmlFor="lunch" className="block text-sm font-medium text-gray-700 mb-2">
                ☀️ Lunch
              </label>
              <textarea
                id="lunch"
                value={menu.lunch}
                onChange={(e) => setMenu({ ...menu, lunch: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter lunch items..."
              />
            </div>

            <div>
              <label htmlFor="dinner" className="block text-sm font-medium text-gray-700 mb-2">
                🌙 Dinner
              </label>
              <textarea
                id="dinner"
                value={menu.dinner}
                onChange={(e) => setMenu({ ...menu, dinner: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter dinner items..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
          >
            <Save className="h-5 w-5" />
            <span>Save Menu</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;