import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaStore, FaShoppingCart, FaPlusSquare, FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./Sidebar.css";
import logo from "../../assets/images/Aman-03.png";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapsed && <img src={logo} alt="logo" className="sidebar-logo" />}
        <button className="collapse-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="sidebar-list">
        <li>
          <NavLink
            to="/dashboard"
            className="sidebar-link"
            activeClassName="active"
          >
            <MdDashboard className="sidebar-icon" />{" "}
            {!isCollapsed && "Dashboard"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mystore"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaStore className="sidebar-icon" /> {!isCollapsed && "My Store"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaShoppingCart className="sidebar-icon" />{" "}
            {!isCollapsed && "Order"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createstore"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaPlusSquare className="sidebar-icon" />{" "}
            {!isCollapsed && "Create Store"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
