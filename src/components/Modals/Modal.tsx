import React from 'react';
import './Modal.css';

interface ModalProps {
  isLogin: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isLogin, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>{isLogin ? 'Login With' : 'Signup With'}</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button className="modal-button" type="submit">
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
