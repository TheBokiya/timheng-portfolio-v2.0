import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/pro-light-svg-icons";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import portfolioData from "../assets/data/project-data";

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

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

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
                className={(isOpen ? "block" : "hidden") + " text-3xl"}
              />
              <FontAwesomeIcon
                icon={faBars}
                className={(!isOpen ? "block" : "hidden") + " text-3xl"}
              />
            </button>
          </div>
        </div>

        <div
          className={(isOpen ? "block" : "hidden") + " p-10 sm:flex relative"}
        >
          {menuItems.map((item, index) => {
            if (item.page === "Portfolio") {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className={
                    "block sm:inline-block font-bold sm:mx-5 my-5 sm:my-0 text-4xl sm:text-base px-2 uppercase hover:text-red"
                  }
                  activeClassName="text-red"
                  onMouseEnter={() => setDropdownIsOpen(true)}
                  onMouseLeave={() => setDropdownIsOpen(false)}
                >
                  {item.page}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="hidden sm:inline-block ml-2"
                  ></FontAwesomeIcon>
                </Link>
              );
            } else {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className={
                    "block sm:inline-block font-bold sm:mx-5 my-5 sm:my-0 text-4xl sm:text-base px-2 uppercase hover:text-red"
                  }
                  activeClassName="text-red"
                >
                  {item.page}
                </Link>
              );
            }
          })}
          <div
            className={
              (dropdownIsOpen ? "sm:block" : "sm:hidden") +
              " hidden origin-top-right absolute right-0 mt-6 mr-10 sm:flex w-auto bg-grey-light z-50"
            }
            onMouseOver={() => setDropdownIsOpen(true)}
            onMouseLeave={() => setDropdownIsOpen(false)}
          >
            {portfolioData.map((item, index) => {
              return (
                <div className="w-1/3 inline-block mx-10 my-5" key={index}>
                  <h3 className="text-navy mb-3">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mr-2 text-red"
                    ></FontAwesomeIcon>
                    {item.group}
                  </h3>
                  {item.projects.map((p, index) => {
                    return (
                      <Link
                        to={p.page}
                        key={index}
                        className="text-navy block whitespace-no-wrap text-sm hover:text-red"
                      >
                        {p.title}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-2 text-red text-xs"
                        ></FontAwesomeIcon>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Menu;
