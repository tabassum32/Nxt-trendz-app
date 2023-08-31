// Write your JS code here

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logo"
        alt="website-logo"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/login" className="nav-link">
          <li>Login</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>
      <button className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav-logout"
        />
      </button>
    </div>
  </nav>
)

export default Header
