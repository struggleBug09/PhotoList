import React from 'react';

import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ children }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {children}
    </div>
  );
};


export default TopNavigationBar;