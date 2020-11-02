import React from "react";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <div>
      <Menu></Menu>
      <div className="container mx-auto px-5 pb-10 sm:px-20">{children}</div>
    </div>
  );
}
