import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" disabled>MAIN</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <Link className="navbar-toggler-icon"></Link>
      </button>
    </nav>
  );
}