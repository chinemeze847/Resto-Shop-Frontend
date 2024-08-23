import React, { useState } from 'react';
import Modal from './Modals/Modal';
import './Navbar.css'


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
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={handleLoginClick}>Login</li>
        <li onClick={handleSignupClick}>Signup</li>
      </ul>

      {showModal && (
        <Modal isLogin={isLogin} closeModal={closeModal} />
      )}
    </nav>
  );
};

export default Navbar;
