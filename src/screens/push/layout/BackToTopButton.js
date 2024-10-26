// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import '../css/BackToTopButton.css';
import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down 200px from the top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <CIcon icon={icon.cilArrowThickTop} />
      </div>
    )
  );
};

export default BackToTopButton;
