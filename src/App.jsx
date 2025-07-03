import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import Forgotpassword from './Authentication/Forgotpassword';
import Dashboard from './Components/Dashboard.jsx';
import NewTicket from './Components/NewTicket.jsx';
import MyTicket from './Components/MyTicket.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<Forgotpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new_ticket" element={<NewTicket />} />
          <Route path="/my_ticket" element={<MyTicket />} />
          <Route path="/" element={<Signin />} />
        </Routes>
    </div>
  );
}

export default App;