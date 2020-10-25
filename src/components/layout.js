import React from "react";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <div>
      <Menu></Menu>
      <div className="container mx-auto px-5 sm:px-20">{children}</div>
    </div>
  );
}
