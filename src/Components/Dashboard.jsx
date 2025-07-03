import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../styles/Home.css';


const box = [
    {
        spec: 'Total Tickets',
        total: 12
    },
    {
        spec: 'Total Solved',
        total: 8
    },
    {
        spec: 'Total Awaiting Approval',
        total: 2
    },
    {
        spec: 'Total in Progress',
        total: 2
    },
]

const Dashboard = () => {
    return (
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-10 p-0">
        <>
            <div>
                <p className="text-center heading">Dashboard</p>
                <div className="boxDiv d-flex flex-row">
                    {
                        box.map((val, index) => {
                            return (
                                <div key={index} id={`box-${index + 1}`} className="box text-center">
                                    <p>{val.spec}</p>
                                    <h1>{val.total}</h1>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Footer className="footer" />
        </>
                        </div>
                <Footer />
            </div>
        </div>
    </>
    );
}

export default Dashboard;