// Nav.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* This is Nav reuse for all pages.
 How about use it ? 
     + Create list of Nav for which page want to use.
     + Call it in each page.
     For example:
     ...
     const headerLinks = [
    { to: "/", label: "Home" },
    { to: "/content", label: "Content" },
    { to: "/about", label: "About" },
    // add more if want 
    ];
    ...
    return (
    <header>
      <Nav links={headerLinks} />
    </header>
  );
};
*/

type NavProps = {
  links: { to: string; label: string }[];
};

const Nav: React.FC<NavProps> = ({ links }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="animation-fade-in-down">
      <button
        onClick={toggleMenu}
        className="md:hidden block text-white focus:outline-none py-4"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      <ul
        className={`flex flex-col md:flex-row gap-10 font-sans ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className={`block px-2 pb-2 border-b-2 text-2xl text-white font-semibold transition duration-300 ease-in-out  max-sm:text-xl${
                location.pathname === link.to
                  ? " border-b-2 border-blue-300"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
