import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/pro-light-svg-icons";
import linkStyle from "../assets/styles/link.module.css";

const Paper = props => {
  return (
    <div className="my-20">
      <div className="flex">
        <div className="w-1/4 sm:w-1/6 text-red">Title</div>
        <div className="w-3/4 sm:w-5/6 font-bold">
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className={linkStyle.link}
          >
            {props.title}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="ml-3 text-red"
            />
          </a>
        </div>
      </div>
      <div className="flex my-3">
        <div className="w-1/4 sm:w-1/6 text-red">Authors</div>
        <div className="w-3/4 sm:w-5/6">{props.authors}</div>
      </div>
      <div className="flex my-3">
        <div className="w-1/4 sm:w-1/6 text-red">Year</div>
        <div className="w-3/4 sm:w-5/6">{props.year}</div>
      </div>
    </div>
  );
};

export default Paper;
