import React from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import DashboardPage from './pages/DashboardPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ArticleProvider } from './contexts/ArticleContext';
import './styles/main.css';

const App = () => {
  // const { isAuthenticated } = useContext(AuthProvider); // Access the authentication context

  return(
  <AuthProvider>
    <ArticleProvider>
      <Router>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">TechTalks</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="/article/:id" element={
            <PrivateRoute>
              <ArticlePage />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </ArticleProvider>
  </AuthProvider>
);
};

export default App;
