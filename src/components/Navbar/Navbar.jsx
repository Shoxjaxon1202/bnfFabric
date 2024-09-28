import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest(".navbar")) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false); // 768px dan katta bo'lsa menyuni yopamiz
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize); // O'lcham o'zgarishini kuzatamiz

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize); // O'chirishni unutmang
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <NavLink to="/home">
            <img src={logo} alt="Logo" className="navbar_logo" />
          </NavLink>
          <ul className={`navbar_list ${isOpen ? "open" : ""}`}>
            <NavLink to="/home" className="navbar_link">
              <li className="navbar_item">Home</li>
            </NavLink>
            <NavLink to="/collection" className="navbar_link">
              <li className="navbar_item">Collection</li>
            </NavLink>
            <NavLink to="/about" className="navbar_link">
              <li className="navbar_item">About Us</li>
            </NavLink>
            <NavLink to="/contact" className="navbar_link">
              <li className="navbar_item">Contacts</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar_right">
          <select className="navbar_select">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
            <option value="pl">PL</option>
          </select>
        </div>
        <div
          className={`navbar_toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
