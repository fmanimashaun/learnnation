import { Link } from "react-router-dom";
import LOGO from "../assets/imgs/logo.svg";

const Header = () => {
  return (
    <header className="bg-light-blue py-3.5">
      <div className="max-w-[1332px] flex items-center justify-between mx-auto">
        <div>
          <Link to="/">
            <img src={LOGO} alt="learnnation logo" className=""/>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between gap-x-16">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <li>
              <a href="https://learnnation.com.ng/course/">Courses</a>
            </li>
          </ul>
        </nav>
        <a
          href="https://learnnation.com.ng/login/index.php"
          className="bg-royal-blue text-white hidden md:block px-4 py-3 rounded-xl font-medium text-xl"
        >
          Learning Portal
        </a>
      </div>
    </header>
  );
};

export default Header;
