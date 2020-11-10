import React from "react";
import Menu from "./menu";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Menu></Menu>
      <div className="container mx-auto px-5 pb-10 sm:px-20">{children}</div>
      <Footer className="block w-full"></Footer>
    </div>
  );
}
