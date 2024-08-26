import React, { useState } from 'react';
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu"  style={{fontFamily:'Arial, sans-serif',backgroundColor: '#ADD8E6'}}>
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Page2</a></li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
