import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StudentProfile from './pages/StudentProfile';
import MarkAbsence from './pages/MarkAbsence';
import Feedback from './pages/Feedback';
import SearchStudent from './pages/SearchStudent';
import ManageRation from './pages/ManageRation';
import UpdateMenu from './pages/UpdateMenu';
import ViewAbsentees from './pages/ViewAbsentees';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            
            {/* Student Routes */}
            <Route 
              path="/student" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/profile" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/mark-absence" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <MarkAbsence />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/feedback" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Feedback />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/search-student" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <SearchStudent />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/manage-ration" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ManageRation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/update-menu" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UpdateMenu />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/view-absentees" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ViewAbsentees />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/reports" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Reports />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/analytics" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Analytics />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;