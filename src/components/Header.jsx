import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <li>
            <a href="https://learnnation.com.ng/course/">Courses</a>
          </li>
        </ul>
      </nav>
      <a href="https://learnnation.com.ng/login/index.php">Learning Portal</a>
    </header>
  )
}

export default Header
