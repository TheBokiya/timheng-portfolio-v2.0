import React from "react";
import Layout from "../components/layout";
import Menu from "../components/menu";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-6xl my-10">Hello! I'm Tim.</h1>
      <p className="lg:w-3/4">
        Welcome to my personal portfolio. a UX/UI designer + Front-End developer
        and a coffee addict. I'm very passionate about digital design and also a
        lowkey admirer of everyday design. Full-time chelsea supporter,
        pop-culture junkie and master of memes. Get in touch with me if you have
        any interesting projects you have in mind.
      </p>
    </Layout>
  );
}
