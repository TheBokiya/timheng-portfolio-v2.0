import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linkStyle from "../assets/styles/link.module.css";

const LinkWithIcon = props => {
  if (props.type === "internal") {
    return (
      <div className="my-2">
        <Link
          to={props.link}
          target="_blank"
          rel="noreferrer"
          className={linkStyle.link + " p-1"}
        >
          <FontAwesomeIcon icon={props.icon} className="mr-5" />
          <span>{props.name}</span>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="my-2">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className={linkStyle.link + " p-1"}
        >
          <FontAwesomeIcon icon={props.icon} className="mr-5" />
          <span>{props.name}</span>
        </a>
      </div>
    );
  }
};

export default LinkWithIcon;
