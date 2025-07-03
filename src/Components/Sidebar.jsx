import React from 'react';
import '../styles/Home.css';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="col-2 sidebar pt-5 ">
            <span className="d-block text-center p-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
                </svg>
                <Link to="/dashboard" className="sideLinks">
                    <span className="sidebarLinks">Dashboard</span>
                </Link>
            </span>
            <span className="d-block text-center p-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-3">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
                </svg>
                <Link to="/new_ticket" className="sideLinks">
                    <span className="sidebarLinks">New Ticket</span>
                </Link>
            </span>
            <span className="d-block text-center p-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-4">
                    <path d="M22 10v8h-2v-8h2zm-8 4v4H6v-4h8zm2-2H4v8h12v-8zM8 6h8v2H8V6zm-2 4h12V8H6v2zm16-4H8V4h12v2z" fill="currentColor"/>
                </svg>
                <Link to="/my_ticket" className="sideLinks">
                    <span className="sidebarLinks">My Ticket</span>
                </Link>
            </span>
        </div>
    )
}

export default Sidebar