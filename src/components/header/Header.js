import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" >
        <span className="HeaderCommenText">Home</span>
      </Link>
      <Link to="/manage-product" >
        <span className="HeaderCommenText">Manage Products</span>
      </Link>
      <Link to="/online-store" >
          <span className="HeaderCommenText">Online Store</span>
      </Link>
    </div>
  );
}

export default Header;