import React, { useState } from 'react';
import UserApi from '../api/UserApi';
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ isLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserApi.login(username, password);
            const payload = jwtDecode(response.token);

            if (payload.role === "ROLE_ADMIN") {
                localStorage.setItem('token', response.token);
                window.location.href = "/";
            } else {
                setError("Tài khoản không có quyền")
            }


        } catch (error) {
            setError('Login failed. Please check your username and password.');
        }
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
