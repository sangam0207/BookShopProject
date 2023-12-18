import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>BookStore</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/cart" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Cart</Link>
            </li>
             
            <li className='nav-item'>
              <Link to = "/orders" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Orders</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/cart" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><FaCartPlus /> <span>{cartItems.length}</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar