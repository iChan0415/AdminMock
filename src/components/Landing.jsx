import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Login.css';

function LoginForm() {
    return (
        <div className="outer-container"> {/* New div wrapping login-container */}
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    {/* Use Link component for navigation */}
                    <Link to="/admin_dashboard">
                        <button type="submit" className="login-button">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
