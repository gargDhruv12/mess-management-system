import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, GraduationCap, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: 'student'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!credentials.username || !credentials.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const result = await login(credentials);
      if (result.success) {
        if (credentials.role === 'student') {
          navigate('/student');
        } else {
          navigate('/admin');
        }
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  return (
    <div 
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)), url('https://img.collegepravesh.com/2014/04/NIT-Kurukshetra.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm"></div>
      
      <div className="relative max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl mt-3">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-lg">
            Sign in to access the Mess Management System
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 mb-6">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-3">
                  Login as
                </label>
                <select
                  id="role"
                  name="role"
                  value={credentials.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-3">
                  {credentials.role === 'student' ? 'Roll Number' : 'Username'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={credentials.username}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                    placeholder={credentials.role === 'student' ? 'Enter your roll number' : 'Enter username'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;