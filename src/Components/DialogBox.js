
import React, { useEffect } from 'react';
import './DialogBox.css';

const DialogBox = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="dialogBox">
      {message}
    </div>
  );
};

export default DialogBox;
