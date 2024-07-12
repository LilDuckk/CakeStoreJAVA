// AuthRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    // Optional: You can add additional logic here to check token validity or expiration

    return <>{children}</>; // Render children if token exists
};

export default AuthRoute;
