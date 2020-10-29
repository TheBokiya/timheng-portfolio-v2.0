import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/pro-light-svg-icons";

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
    <div>
      <header className="bg-gray-500 sm:flex sm:justify-between">
        <div className="flex items-center justify-end p-5">
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="focus:outline-none"
            >
              <FontAwesomeIcon
                icon={faTimes}
                className={(isOpen === true ? "block" : "hidden") + " text-3xl"}
              />
              <FontAwesomeIcon
                icon={faBars}
                className={
                  (isOpen === false ? "block" : "hidden") + " text-3xl"
                }
              />
            </button>
          </div>
        </div>

        <div
          className={(isOpen === true ? "block" : "hidden") + " p-10 sm:flex"}
        >
          {menuItems.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className={
                  "block sm:inline-block font-bold sm:mx-10 my-5 sm:my-0 text-4xl sm:text-base px-2 uppercase hover:text-red"
                }
                activeClassName="text-red"
              >
                {item.page}
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
}
