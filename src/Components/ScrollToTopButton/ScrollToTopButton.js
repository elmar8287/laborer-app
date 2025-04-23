import React, { useState } from 'react';
// import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import './Scrol.css';

function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };



  window.addEventListener('scroll', checkScrollTop);

  return (
    <FaPhoneFlip className="scrollTop" style={{ height: 130, width: 60, display: showScroll ? 'flex' : 'none' }} />
  );
}

export default ScrollToTopButton;