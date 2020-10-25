import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import menuStyles from "../styles/menu.module.css";

const menuItems = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Portfolio",
    link: "/portfolio",
  },
  {
    page: "Publications",
    link: "/publications",
  },
  {
    page: "About",
    link: "/about",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-end p-5">
        <div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </button>
        </div>
      </div>

      <div className={isOpen === true ? "block p-5" : "hidden"}>
        {menuItems.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="block font-semibold my-5 text-2xl hover:bg-gray-800 rounded px-2"
            >
              {item.page}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
