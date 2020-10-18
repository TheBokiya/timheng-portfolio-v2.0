import React from "react";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto sm:px-10 lg:px-20">
      <div className="grid grid-cols-1">
        <Menu></Menu>
        {children}
      </div>
    </div>
  );
}
