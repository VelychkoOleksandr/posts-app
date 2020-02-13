import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">MAIN</Link>
    </nav>
  );
}

export default NavBar;