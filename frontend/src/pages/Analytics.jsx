import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const Analytics = () => {
  const analyticsData = {
    dailyParticipation: 94.4,
    monthlyRevenue: 2850000,
    averageExtras: 12.5,
    satisfactionScore: 4.2
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 ml-3">Analytics Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-700">Daily Participation</p>
                <p className="text-2xl font-bold text-blue-900">{analyticsData.dailyParticipation}%</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-500 rounded-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-700">Monthly Revenue</p>
                <p className="text-2xl font-bold text-green-900">₹{(analyticsData.monthlyRevenue / 1000000).toFixed(1)}M</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-500 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-orange-700">Avg. Extras/Day</p>
                <p className="text-2xl font-bold text-orange-900">{analyticsData.averageExtras}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-500 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-purple-700">Satisfaction Score</p>
                <p className="text-2xl font-bold text-purple-900">{analyticsData.satisfactionScore}/5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Charts</h3>
          <p className="text-gray-600">
            Detailed charts and visualizations will be implemented here using Chart.js or Recharts.
            This will include participation trends, revenue analysis, and satisfaction metrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;