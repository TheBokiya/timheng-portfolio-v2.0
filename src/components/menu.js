import React from "react";
import { Link } from "gatsby";
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
  return (
    <nav>
      <div
        className={
          menuStyles.container +
          " sticky left-0 top-0 mt-10 w-auto inline-block p-5"
        }
      >
        {menuItems.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="block mt-4 lg:mt-0 uppercase text-1xl font-black"
            >
              {item.page}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
