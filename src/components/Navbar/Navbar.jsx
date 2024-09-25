import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.png";

import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <NavLink to={"/home"}>
            <img src={logo} alt="" className="navbar_logo" />
          </NavLink>
          <ul className="navbar_list">
            <NavLink to="/home" className="navbar_link">
              <li className="navbar_item">Home</li>
            </NavLink>
            <NavLink to="/collection" className="navbar_link">
              <li className="navbar_item">Collection</li>
            </NavLink>
            <NavLink to="/about" className="navbar_link">
              <li className="navbar_item">About us</li>
            </NavLink>
            <NavLink to="/contact" className="navbar_link">
              <li className="navbar_item">Contacts</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar_right">
          <select className="navbar_select" name="" id="">
            <option value="en">En</option>
            <option value="en">Ru</option>
            <option value="en">Uz</option>
            <option value="en">Poland</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
