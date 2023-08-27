import React from 'react';
import spaceXLogo from '../assets/download.png'

const Header = () => {
  return (
    <header className="h-40 w-full bg-black flex items-center justify-between px-8">
      <h1 className='text-white text-xl font-bold'>SpaceX Rockets Landing Page</h1>
      <img
        src={spaceXLogo}
        alt="SpaceX Logo"
        className="h-32"
      />

    </header>
  );
};

export default Header;
