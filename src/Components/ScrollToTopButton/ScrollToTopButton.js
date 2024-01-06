import React, { useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
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
    <IoLogoWhatsapp className="scrollTop" style={{ height: 100, width: 50, display: showScroll ? 'flex' : 'none' }} />
  );
}

export default ScrollToTopButton;