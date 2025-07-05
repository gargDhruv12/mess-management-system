const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to set auth token
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

// Helper function to make API calls
const apiCall = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication API calls
export const authAPI = {
  // Login user
  login: async (credentials) => {
    const data = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (data.success && data.token) {
      setAuthToken(data.token);
    }
    
    return data;
  },

  // Register user (for testing)
  register: async (userData) => {
    const data = await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (data.success && data.token) {
      setAuthToken(data.token);
    }
    
    return data;
  },

  // Get current user
  getCurrentUser: async () => {
    return await apiCall('/auth/me');
  },

  // Logout
  logout: () => {
    setAuthToken(null);
    localStorage.removeItem('user');
  },
};

// Students API calls
export const studentsAPI = {
  // Get all students (admin only)
  getAllStudents: async () => {
    return await apiCall('/students');
  },

  // Get student by roll number
  getStudent: async (rollNumber) => {
    return await apiCall(`/students/${rollNumber}`);
  },

  // Add extra item for student
  addExtraItem: async (rollNumber, extraItem) => {
    return await apiCall(`/students/${rollNumber}/extra`, {
      method: 'POST',
      body: JSON.stringify(extraItem),
    });
  },

  // Add absence request for student
  addAbsenceRequest: async (rollNumber, absenceRequest) => {
    return await apiCall(`/students/${rollNumber}/absence`, {
      method: 'POST',
      body: JSON.stringify(absenceRequest),
    });
  },
};

// Menu API calls
export const menuAPI = {
  // Get menu for a specific date
  getMenu: async (date) => {
    return await apiCall(`/menu/${date}`);
  },

  // Update menu (admin only)
  updateMenu: async (date, menuData) => {
    return await apiCall(`/menu/${date}`, {
      method: 'PUT',
      body: JSON.stringify(menuData),
    });
  },
};

// Transactions API calls
export const transactionsAPI = {
  // Get user transactions
  getUserTransactions: async () => {
    return await apiCall('/transactions');
  },

  // Add transaction
  addTransaction: async (transactionData) => {
    return await apiCall('/transactions', {
      method: 'POST',
      body: JSON.stringify(transactionData),
    });
  },
};

export default {
  auth: authAPI,
  students: studentsAPI,
  menu: menuAPI,
  transactions: transactionsAPI,
};
