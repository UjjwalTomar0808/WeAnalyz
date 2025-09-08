import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import ForgotPassword from './Authentication/Forgotpassword';
import Dashboard from './Components/Dashboard';
import NewTicket from './Components/NewTicket';
import MyTicket from './Components/MyTicket';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          
          {/* Fallback for undefined routes */}
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
