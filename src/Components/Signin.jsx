import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Signin.css";

function Signin() {
    return (
        <div className="container-fluid signinDiv d-flex align-items-center justify-content-center">
            <div className="signBox">
                <h1 className="text-center mt-5 signin_head mb-5">Helpdesk System</h1>
                <form action="" className="d-flex flex-column align-items-center">
                    <input type="text" placeholder="Username" className="d-block" />
                    <input type="password" placeholder="Password" className="d-block" />
                    <button className="btn" type="submit">Sign In</button>
                </form>
                <div className="row mt-4">
                    <Link to="#" className="text-danger offset-3 col-2 forgetLink">
                        Forget password
                    </Link>
                    <Link to="#" className="text-black offset-3 col-1 signupLink">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;