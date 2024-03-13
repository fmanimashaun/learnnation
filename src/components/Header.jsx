import { useState, useEffect } from "react";
import { Link, NavLink  } from "react-router-dom";
import LOGO from "../assets/imgs/learnnation-logo.svg";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu on resize
  const handleResize = () => {
    setIsMenuOpen(false);
  };

  // Add event listener on component mount
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-light-blue p-3.5 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-auto">
          <div className="w-full flex items-center gap-x-4 justify-between">
            <Link to="/">
              <img src={LOGO} alt="learnnation logo" className="w-[138px] h-auto" />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen} 
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Main Navigation (Hidden on smaller screens) */}
          <nav className="hidden md:block"> 
            <ul className="md:flex items-center gap-x-8 lg:gap-x-10">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "font-medium text-base lg:text-xl whitespace-nowrap text-royal-blue" : "font-medium text-base lg:text-xl whitespace-nowrap"}
              >
                About Us
              </NavLink>
              <li>
                <a
                  href="https://portal.learnnation.com.ng/?home=p1"
                  className="font-medium text-base lg:text-xl whitespace-nowrap"
                  target="_blank" rel="noreferrer"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="https://portal.learnnation.com.ng/course/"
                  className="font-medium text-base lg:text-xl whitespace-nowrap"
                  target="_blank" rel="noreferrer"
                >
                  Courses
                </a>
              </li>
              <a
                href="https://portal.learnnation.com.ng/login/index.php"
                className="bg-royal-blue text-white px-4 py-3 rounded-xl font-medium text-base lg:text-xl whitespace-nowrap"
                target="_blank" rel="noreferrer"
              >
                Learning Portal
              </a>
            </ul>
          </nav>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="w-full bg-light-blue py-4 z-10"> 
              <ul className="flex flex-col gap-y-4 items-end">
                <NavLink
                  to="/about"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={({ isActive }) => isActive ? "font-medium text-base lg:text-xl whitespace-nowrap text-royal-blue" : "font-medium text-base lg:text-xl whitespace-nowrap"}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={({ isActive }) => isActive ? "font-medium text-base lg:text-xl whitespace-nowrap text-royal-blue" : "font-medium text-base lg:text-xl whitespace-nowrap"}
                >
                  Contact Us
                </NavLink>
                <li>
                  <a
                    href="https://learnnation.com.ng/course/"
                    className="font-medium text-base lg:text-xl whitespace-nowrap"
                    target="_blank" rel="noreferrer"
                  >
                    Courses
                  </a>
                </li>
                <a
                  href="https://learnnation.com.ng/login/index.php"
                  className="bg-royal-blue text-white px-4 py-3 rounded-xl font-medium text-base lg:text-xl whitespace-nowrap"
                  target="_blank" rel="noreferrer"
                >
                  Learning Portal
                </a>
              </ul>
            </nav>
          )}
      </div>
    </header>
  );
};

export default Header;
