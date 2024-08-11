import axios from 'axios';

// Set the base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// Register a new user
export const registerUser = async (email, password) => {
  const response = await axiosInstance.post(`${API_BASE_URL}/auth/register`, {
    email,
    password,
  });
  return response;
};

// Log in a user
export const loginUser = async (email, password) => {
try {
  const response = await axiosInstance.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });
  localStorage.setItem('token', response.data.token);
  return response;
}
catch (error){
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;  // Re-throw the error for further handling if needed
}
};

// Fetch all articles
export const fetchArticles = async () => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/articles`);
    console.log(response.data)
    return response.data;
  }
  catch (error){
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;  // Re-throw the error for further handling if needed
}

};

// Fetch a single article by ID
export const fetchArticleById = async (id) => {
  const response = await axiosInstance.get(`${API_BASE_URL}/articles/${id}`);
  return response;
};

// Fetch dashboard data (most liked and most viewed articles)
export const fetchDashboardData = async () => {
  const response = await axiosInstance.get(`${API_BASE_URL}/dashboard`);
  return response;
};

export const likeArticle = async (id) => {
  const response = await axiosInstance.post(`${API_BASE_URL}/articles/${id}/like`);
  return response;
};

// try {
//   await axios.post(`/api/article/like/${id}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
//   setLikes(likes + 1);
// } catch (error) {
//   console.error('Error liking the article:', error);
// }
