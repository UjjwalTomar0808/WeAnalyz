import React from 'react';
import '../styles/Home.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard.jsx';
import NewTicket from './NewTicket.jsx';
import MyTicket from './MyTicket.jsx';
import Navbar from './Navbar';


function Home() {
    return (<>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-10 p-0">
                    <Routes>
                        {/* <Route index element={<Dashboard />} />
                        <Route path="/new_ticket" element={<NewTicket />} />
                        <Route path="/my_ticket" element={<MyTicket />} /> */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    </>
    )
}

export default Home;