import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/pro-light-svg-icons";
import linkStyle from "../assets/styles/link.module.css";

const workExperience = [
  {
    company: "MUCS by mo",
    title: "Co-Founder",
    timeline: "August 2018 - Present",
    location: "Phnom Penh, Cambodia",
    link: "https://www.instagram.com/mucsbymo/",
  },
  {
    company: "Sabay Digital Corp.",
    title: "Frontend Team Lead x UI/UX Lead",
    timeline: "May 2018 - Present",
    location: "Phnom Penh, Cambodia",
  },
];

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
      <h1 className="text-4xl font-black mb-5">Qualifications</h1>
      <div className="flex">
        <div className="w-1/2">
          <h3 className="text-2xl">
            <FontAwesomeIcon icon={faBriefcase} className="text-1xl mr-3" />
            Experience
          </h3>
          {workExperience.map((item, index) => {
            return (
              <div key={index} className="my-8">
                <div>
                  <span className="font-bold text-red">{item.title}</span>
                  <span className="mx-5">|</span>
                  <span>{item.timeline}</span>
                </div>
                <div>
                  {item.link ? (
                    <Link
                      to={item.link}
                      target="_blank"
                      className={linkStyle.link}
                    >
                      {item.company}
                    </Link>
                  ) : (
                    item.company
                  )}
                </div>
                <div className="text-xs">{item.location}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
