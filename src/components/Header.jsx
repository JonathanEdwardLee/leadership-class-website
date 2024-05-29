import React from 'react';
import logo from '../images/lc_header_logo_new.jpg';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000', padding: '10px', textAlign: 'center' }}>
      <img src={logo} alt="Leadership Class" style={{ maxWidth: '100%', height: 'auto' }} />
    </header>
  );
};

export default Header;
