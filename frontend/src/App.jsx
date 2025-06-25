import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography, Box } from '@mui/material';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/student">Student Dashboard</Button>
          <Button color="inherit" component={Link} to="/admin">Admin Panel</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student" element={<StudentDashboard rollNumber="123" />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the Mess Management System
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Please select an option from the navigation bar above.
      </Typography>
    </Box>
  );
}

export default App;

