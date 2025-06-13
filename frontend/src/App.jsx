// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import AdminPanel from "./pages/AdminPanel";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <AdminPanel />
//     </div>
//   );
// }

// export default App;



import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <StudentDashboard rollNumber="B23CS000" />
    </div>
  );
}

export default App;

