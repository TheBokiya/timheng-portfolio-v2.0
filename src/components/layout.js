import React from "react";
import Menu from "./menu";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div>
      <Menu></Menu>
      <div className="container mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-1">{children}</div>
      </div>
    </div>
  );
}
