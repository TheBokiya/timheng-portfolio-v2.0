import React from "react";
import { Link } from "gatsby";
import menuStyles from "../styles/menu.module.css";

const menuItems = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Projects",
    link: "/projects",
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
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto items-center">
        <div className="text-sm lg:flex-grow">
          {menuItems.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className="block mt-4 lg:inline-block lg:mt-0 mx-10 uppercase"
              >
                {item.page}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
