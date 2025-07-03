import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/Home.css';



function MyTicket() {
    return (
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-10 p-0">

        <div >
            <div className="container my_ticket row">
            <p className="text-center heading">List of Ticket</p>
                <div className="row m-0">
                    <input type="search" className="offset-1 col-2" placeholder="Find ticket" id="searchBar" />
                    <SearchIcon className="searchIcon fs-1 p-2 mt-3" />
                </div>
                <div className="row m-0">
                    <span className="offset-1">
                        <label htmlFor="entries" className="me-1 pb-2">Show:</label>
                        <select name="entries" id="entries" className="d-inline-block pt-0">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                        <p className="d-inline-block ms-4 m-3">Entries</p>
                    </span>
                </div>
                <div className="row text-center">
                    <div className="offset-1 col-1 ">Ticket No.</div>
                    <div className="col-2 ">Login issue</div>
                    <div className="col-2 ">Status</div>
                    <div className="col-2 ">Support by</div>
                    <div className="col-1 ">Date</div>
                    <div className="col-2 ">Rate</div>
                </div>
                <div className="row data text-center p-0 m-0">
                    <div className="offset-1 col-1 pt-3 pb-3">
                        <Link to="#">
                            1234
                        </Link>
                    </div>
                    <div className="col-2 pt-3 pb-3">New ticket issue</div>
                    <div className="col-2 pt-3 pb-3 ">
                        <span className="inProgess p-2">
                            In Progress
                        </span>
                    </div>
                    <div className="col-2 pt-3 pb-3">Tech Support</div>
                    <div className="col-1 pt-3 pb-3">13/08/21</div>
                    <div className="col-2 pt-3 pb-3">
                        {Array(5)
                            .fill()
                            .map((val, i) => <StarIcon className="starIcon" key={i} />)
                        }
                    </div>
                </div>
                <div className="row data text-center p-0">
                    <div className="offset-1 col-1 pt-3 pb-3">
                        <Link to="#">
                            1124
                        </Link>
                    </div>
                    <div className="col-2 pt-3 pb-3">New ticket</div>
                    <div className="col-2 pt-3 pb-3">
                        <span className="onHold text-white p-2">
                            On Hold
                        </span>
                    </div>
                    <div className="col-2 pt-3 pb-3">Operational Team</div>
                    <div className="col-1 pt-3 pb-3">14/08/21</div>
                    <div className="col-2 pt-3 pb-3">
                        {Array(5)
                            .fill()
                            .map((val, i) => <StarIcon className="starIcon" key={i} />)
                        }
                    </div>
                </div>
                <div className="row data text-center p-0">
                    <div className="offset-1 col-1 pt-3 pb-3">
                        <Link to="#">
                            1224
                        </Link>
                    </div>
                    <div className="col-2 pt-3 pb-3">Ticket submission</div>
                    <div className="col-2 pt-3 pb-3">
                        <span className="closed text-white p-2">
                            Closed
                        </span>
                    </div>
                    <div className="col-2 pt-3 pb-3">Tech Support</div>
                    <div className="col-1 pt-3 pb-3">13/08/21</div>
                    <div className="col-2 pt-3 pb-3">
                        {Array(5)
                            .fill()
                            .map((val, i) => <StarIcon className="coloredStar" key={i} />)
                        }
                    </div>
                </div>
                <div className="row data text-center p-0">
                    <div className="offset-1 col-1 pt-3 pb-3">
                        <Link to="#">
                            1244
                        </Link>
                    </div>
                    <div className="col-2 pt-3 pb-3">Login issue</div>
                    <div className="col-2 pt-3 pb-3">
                        <span className="inProgess p-2">
                            In Progress
                        </span>
                    </div>
                    <div className="col-2 pt-3 pb-3">Operational Team</div>
                    <div className="col-1 pt-3 pb-3">14/08/21</div>
                    <div className="col-2 pt-3 pb-3">
                        {Array(5)
                            .fill()
                            .map((val, i) => <StarIcon className="starIcon" key={i} />)
                        }
                    </div>
                </div>
                <div className="row data text-center p-0">
                    <div className="offset-1 col-1 pt-3 pb-3">
                        <Link to="#">
                            1114
                        </Link>
                    </div>
                    <div className="col-2 pt-3 pb-3">Subject</div>
                    <div className="col-2 pt-3 pb-3">
                        <span className="inProgess p-2">
                            In Progress
                        </span>
                    </div>
                    <div className="col-2 pt-3 pb-3">Tech Support</div>
                    <div className="col-1 pt-3 pb-3">03/08/21</div>
                    <div className="col-2 pt-3 pb-3">
                        {Array(5)
                            .fill()
                            .map((val, i) => <StarIcon className="starIcon" key={i} />)
                        }
                    </div>
                </div>
                <p className="offset-1">Showing 1 to 5 of 5 entries</p>
            </div>
        </div>
      
                        </div>
                        <Footer />
                    </div>
                    </div>
                </>
    )
}

export default MyTicket