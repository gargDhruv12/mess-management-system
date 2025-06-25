import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Calendar, MessageSquare, UtensilsCrossed, Clock, User, AlertCircle, TrendingUp, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || null);
  const [todayMenu, setTodayMenu] = useState({
    breakfast: "Poha, Tea, Banana",
    lunch: "Rice, Dal, Sabzi, Roti, Pickle",
    dinner: "Rice, Rajma, Roti, Salad"
  });
  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, type: 'meal', description: 'Daily Meal Charge', amount: -45, date: '2024-01-15' },
    { id: 2, type: 'extra', description: 'Butter', amount: -15, date: '2024-01-15' },
    { id: 3, type: 'extra', description: 'Ice Cream', amount: -25, date: '2024-01-14' }
  ]);

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setProfilePicture(imageUrl);
        // In a real app, you would upload to server here
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-blue-100 text-lg">Roll Number: {user?.rollNumber}</p>
            <p className="text-blue-200 text-sm mt-1">Have a great day at the mess!</p>
          </div>
          <div className="hidden md:block">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-white/20 backdrop-blur-sm">
                {profilePicture ? (
                  <img 
                    src={profilePicture} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white/80" />
                  </div>
                )}
              </div>
              <label className="absolute -bottom-2 -right-2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group-hover:scale-110">
                <Camera className="h-4 w-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Wallet className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Current Balance</p>
              <p className="text-3xl font-bold text-gray-900">₹{user?.balance?.toLocaleString()}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                Sufficient balance
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Attendance Status</p>
              <p className="text-3xl font-bold text-green-600">Present</p>
              <p className="text-xs text-gray-500 mt-1">Today's status</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-3xl font-bold text-gray-900">28 Days</p>
              <p className="text-xs text-gray-500 mt-1">Days present</p>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Menu */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
            <UtensilsCrossed className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 ml-3">Today's Menu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">🌅 Breakfast</h3>
            <p className="text-gray-700 leading-relaxed">{todayMenu.breakfast}</p>
            <p className="text-xs text-gray-500 mt-2">7:00 AM - 9:00 AM</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">☀️ Lunch</h3>
            <p className="text-gray-700 leading-relaxed">{todayMenu.lunch}</p>
            <p className="text-xs text-gray-500 mt-2">12:00 PM - 2:00 PM</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">🌙 Dinner</h3>
            <p className="text-gray-700 leading-relaxed">{todayMenu.dinner}</p>
            <p className="text-xs text-gray-500 mt-2">7:00 PM - 9:00 PM</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          to="/student/mark-absence"
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-3">Mark Absence</h3>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">Mark yourself absent for future dates (at least one day in advance)</p>
          <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
            Click to mark absence →
          </div>
        </Link>

        <Link 
          to="/student/feedback"
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-3">Submit Feedback</h3>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">Share your feedback about the mess food and services</p>
          <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
            Give feedback →
          </div>
        </Link>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'meal' ? 'bg-blue-100' : 'bg-orange-100'
                }`}>
                  {transaction.type === 'meal' ? 
                    <UtensilsCrossed className={`h-4 w-4 ${transaction.type === 'meal' ? 'text-blue-600' : 'text-orange-600'}`} /> :
                    <Wallet className="h-4 w-4 text-orange-600" />
                  }
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
              </div>
              <span className={`font-bold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                {transaction.amount < 0 ? '-' : '+'}₹{Math.abs(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;