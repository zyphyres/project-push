import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check login status

  if (!isLoggedIn) {
    return <Navigate to="/" />; // Redirect to login page if not logged in
  }

  return children; // If logged in, allow access to the route
};

export default ProtectedRoute;
