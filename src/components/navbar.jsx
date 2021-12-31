import React, { Component } from 'react';

// Statless Function Component

const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="www.google.com">Navbar {" "}
        <span className="badge bg-secondary">
          {totalCounters}
        </span>
        </a>
    </nav>
  );
}


 
export default NavBar;