import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, Plus, FileText, TrendingUp, Package, Settings, BarChart3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [dashboardStats, setDashboardStats] = useState({
    totalStudents: 1250,
    presentToday: 1180,
    totalBalance: 31250000,
    todayExtras: 45,
    absentToday: 70,
    monthlyRevenue: 2850000
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Extra added for Roll No. 21114XXX', details: 'Butter - ₹15', time: '2 mins ago', type: 'extra' },
    { id: 2, action: 'Student marked absent', details: 'Roll No. 21114YYY for tomorrow', time: '5 mins ago', type: 'absence' },
    { id: 3, action: 'Menu updated', details: 'Tomorrow\'s lunch menu updated', time: '1 hour ago', type: 'menu' },
    { id: 4, action: 'Ration stock updated', details: 'Rice stock replenished - 500kg', time: '2 hours ago', type: 'ration' }
  ]);

  const quickActions = [
    {
      title: 'Search Student',
      description: 'Find student by roll number or name to add extras',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      link: '/admin/search-student'
    },
    {
      title: 'Manage Ration',
      description: 'Add or update ration items with cost and stock levels',
      icon: Package,
      color: 'from-green-500 to-emerald-500',
      link: '/admin/manage-ration'
    },
    {
      title: 'Update Menu',
      description: 'Update daily mess menu for breakfast, lunch, and dinner',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      link: '/admin/update-menu'
    },
    {
      title: 'View Absentees',
      description: 'See list of students marked absent for each day',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      link: '/admin/view-absentees'
    },
    {
      title: 'Generate Reports',
      description: 'Generate monthly reports and export as PDF or CSV',
      icon: BarChart3,
      color: 'from-red-500 to-pink-500',
      link: '/admin/reports'
    },
    {
      title: 'Analytics',
      description: 'View detailed analytics and trends',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      link: '/admin/analytics'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Admin Dashboard
            </h1>
            <p className="text-indigo-100 text-lg">Welcome back, {user?.name}</p>
            <p className="text-indigo-200 text-sm mt-1">Manage mess operations and student accounts</p>
          </div>
          <div className="hidden md:block">
            <div className="p-2 brounded-xl bg-white">
              {/* <Settings className="h-16 w-16 text-white" /> */}
              <img src="National_Institute_of_Technology,_Kurukshetra_Logo.png" alt="NIT Kurukshetra Logo" className="h-16 w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalStudents}</p>
              <p className="text-xs text-blue-600 mt-1">Active registrations</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Present Today</p>
              <p className="text-3xl font-bold text-green-600">{dashboardStats.presentToday}</p>
              <p className="text-xs text-gray-500 mt-1">{dashboardStats.absentToday} absent</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Balance</p>
              <p className="text-3xl font-bold text-gray-900">₹{(dashboardStats.totalBalance / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-purple-600 mt-1">All students combined</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
              <Plus className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Today's Extras</p>
              <p className="text-3xl font-bold text-orange-600">{dashboardStats.todayExtras}</p>
              <p className="text-xs text-gray-500 mt-1">Items sold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 bg-gradient-to-br ${action.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-3">{action.title}</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{action.description}</p>
            <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Access {action.title.toLowerCase()} →
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'extra' ? 'bg-orange-100' :
                  activity.type === 'absence' ? 'bg-red-100' :
                  activity.type === 'menu' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  {activity.type === 'extra' && <Plus className="h-4 w-4 text-orange-600" />}
                  {activity.type === 'absence' && <Users className="h-4 w-4 text-red-600" />}
                  {activity.type === 'menu' && <FileText className="h-4 w-4 text-green-600" />}
                  {activity.type === 'ration' && <Package className="h-4 w-4 text-blue-600" />}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;