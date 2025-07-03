import React from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/Home.css';


function NewTicket() {
    return (
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-10 p-0">

        <div >
            <div className="container new_ticket row">
            <p className="text-center heading">Create New Ticket</p>
                <div className="row">
                    <label htmlFor="ticketNo" className="offset-1 col-1">Ticket No</label>
                    <input type="text" id="ticketNo" className="col-3" />
                    <label htmlFor="date" className="offset-1 col-2">Date</label>
                    <input type="text" id="date" className="col-3" />
                </div>
                <div className="row ">
                    <label htmlFor="name" className="offset-1 col-1">Name</label>
                    <input type="text" id="name" className="col-3" />
                    <label htmlFor="department" className="offset-1 col-2">Department</label>
                    <input type="text" id="department" className="col-3" />
                </div>
                <div className="row ">
                    <label htmlFor="subject" className="offset-1 col-11 ">Subject</label>
                    <input type="text" id="subject" className="offset-1 col-10" />
                </div>
                <div className="row">
                    <div className="offset-1 col-5">
                        <label htmlFor="category" className="row ms-1 ">Category</label>
                        <input type="text" id="category" className="col-9" />
                        <label htmlFor="type" className="row ms-1 mb-4">Type</label>
                        <input type="text" id="type" className="col-9" />
                        <label htmlFor="priority" className="row ms-1 mb-4">Priority</label>
                        <input type="text" id="priority" className="col-9" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="description" className="row mb-4">Description</label>
                        <textarea name="description" id="description" cols="10" rows="5" className="col-10"></textarea>
                    </div>
                </div>
                <div className="row">
                    <button className="new_ticket_btn offset-8 col-3">Submit</button>
                </div>
            </div>
        </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
    )
}

export default NewTicket