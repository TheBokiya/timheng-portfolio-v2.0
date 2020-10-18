import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function linkWithIcon(props) {
  return (
    <div className="my-2">
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="hover:text-pink-500"
      >
        <FontAwesomeIcon icon={props.icon} size="lg" />
        <span className="ml-2">{props.name}</span>
      </a>
    </div>
  );
}
