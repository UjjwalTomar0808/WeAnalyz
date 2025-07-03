import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Style.css";

function Signin() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="signinDiv">
            <div className="signBox">
                <h1 className="signin_head">Helpdesk System</h1>
                <form className='signinform' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign In</button>
                    <div className="frow">
                        <Link to="/forget-password" className="forgetLink">
                            Forgot password
                        </Link>
                        <Link to="/signup" className="signupLink">
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;