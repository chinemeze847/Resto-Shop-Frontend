import React, { useState } from 'react';
import Modal from '../Modals/Modal';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Track whether to show login or signup

  const handleLoginClick = () => {
    setIsLogin(true);
    setShowModal(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar">
      <h2>Restaurant Shop</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={handleLoginClick}>Login</li>
        <li onClick={handleSignupClick}>Signup</li>
      </ul>

      {showModal && <Modal isLogin={isLogin} closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
