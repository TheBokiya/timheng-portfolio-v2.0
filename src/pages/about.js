import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>Tim Bodyka Heng | About</title>
      </Helmet>
      <div className="mt-5">
        <h1 className="text-4xl font-black">Me?</h1>
        <h2 className="text-2xl text-red">Let me tell you a bit about me.</h2>
      </div>
      <div className="flex mt-5">
        <div className="sm:w-3/4">
          <p className="text-lg">
            As an individual who is intrigued by how people and technology
            intertwine, I have developed interests in UX Design, Visual
            Analytics and Web technologies. My interests take me everywhere in
            the scope of HCI from designing graphical user interfaces for mobile
            apps to explore new algorithms to support user definable graph
            layout in visual analytics. I have shaped myself into a
            self-disciplined person capable of working well independently or in
            a team.
          </p>
        </div>
        <div className="sm:w-1/4"></div>
      </div>
      <hr className="my-8" />
      <div>
        <h1 className="text-4xl font-black">Qualifications</h1>
      </div>
    </Layout>
  );
}
