import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Dashboard from "./pages/Dashboard";
import MyStore from "./pages/MyStore";
import Order from "./pages/Order";
import CreateStore from "./pages/CreateStore";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mystore" element={<MyStore />} />
              <Route path="/order" element={<Order />} />
              <Route path="/createstore" element={<CreateStore />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
