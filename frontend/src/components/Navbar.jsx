import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Users, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isLoginPage = location.pathname === '/';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoginPage) {
    return (
      <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-xl">
                {/* <GraduationCap className="h-8 w-8 text-white" /> */}
                <img src="National_Institute_of_Technology,_Kurukshetra_Logo.png" alt="NIT Kurukshetra Logo" className="h-16 w-16" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                  NIT Kurukshetra
                </h1>
                <p className="text-sm text-gray-600 font-medium">Mess Management System</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="p-2 brounded-xl">
              {/* <GraduationCap className="h-8 w-8 text-white" /> */}
              <img src="National_Institute_of_Technology,_Kurukshetra_Logo.png" alt="NIT Kurukshetra Logo" className="h-16 w-16" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                NIT Kurukshetra
              </h1>
              <p className="text-sm text-gray-600 font-medium">Mess Management System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {user && (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-600 capitalize">
                    {user.role} {user.rollNumber && `• ${user.rollNumber}`}
                  </p>
                </div>
                
                {user.role === 'student' && (
                  <Link 
                    to="/student" 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith('/student') 
                        ? 'bg-blue-100 text-blue-700 shadow-md' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <User className="h-4 w-4" />
                    <span>Student Portal</span>
                  </Link>
                )}
                
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith('/admin') 
                        ? 'bg-blue-100 text-blue-700 shadow-md' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Admin Portal</span>
                  </Link>
                )}
                
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;