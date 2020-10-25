import React from "react";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <div>
      <Menu></Menu>
      <div className="container mx-auto px-10 lg:px-20">
        <div>{children}</div>
      </div>
    </div>
  );
}
