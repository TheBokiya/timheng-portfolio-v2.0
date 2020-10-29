import React from "react";
import linkStyle from "../assets/styles/link.module.css";

export default function Qualification(props) {
  return (
    <div className="my-8">
      <div>
        <span className="font-bold text-red">{props.main}</span>
        <span className="mx-5">|</span>
        <span>{props.timeline}</span>
      </div>
      <div>
        {props.link ? (
          <a href={props.link} target="_blank" className={linkStyle.link}>
            {props.sub}
          </a>
        ) : (
          props.sub
        )}
      </div>
      <div className="text-xs">{props.location}</div>
    </div>
  );
}
