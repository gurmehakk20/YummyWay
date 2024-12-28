import { useState } from 'react';
import Logo from '../../Images/logo_nobg.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [loginState, setLoginState] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo-container">
          <img
            className="h-20 w-auto"
            alt="logo"
            src={Logo}
          />
        </div>

        {/* Navigation */}
        <nav className="nav-items">
          <ul className="flex items-center space-x-6 text-gray-700">
            <li className="text-sm">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="hover:text-blue-500">Cart</li>
            <li>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                onClick={() => {
                  setLoginState(loginState === "LOGIN" ? "LOGOUT" : "LOGIN");
                }}
              >
                {loginState}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
