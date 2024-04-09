// Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import bgIcon from "../../assets/icon/bgIcon.png";
const Footer: React.FC = () => {
  const footerLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/manual", label: "Hướng dẫn sử dụng" },
    { to: "/blog", label: "Blog" },
    // Add more links if needed
  ];
  return (
    <footer className="bg-gray-400 px-20 py-4 max-md:px-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={bgIcon} alt="" className="w-60 h-40" />
          <h1 className="text-white font-bold">Warehouse App</h1>
        </div>
        <nav>
          <ul className="flex flex-col gap-6 max-md:gap-3">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="text-white hover:text-gray-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-white">
          &copy; 2024 Warehouse App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
