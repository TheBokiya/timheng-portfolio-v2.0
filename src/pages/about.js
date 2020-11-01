import React from "react";
import Layout from "../components/layout";
import Qualification from "../components/qualification";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faAward,
  faUserGraduate,
} from "@fortawesome/pro-light-svg-icons";
import { graphql } from "gatsby";
import Img from "gatsby-image";

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
  {
    company: "Simon Fraser University",
    title: "Research Assistant",
    timeline: "September 2015 - April 2018",
    location: "Vancouver BC, Canada",
  },
  {
    company: "Simon Fraser University",
    title: "Teaching Assistant",
    timeline: "January 2016 - December 2016",
    location: "Vancouver BC, Canada",
  },
  {
    company: "Radiant Communications",
    title: "UX/UI Designer/Developer",
    timeline: "February 2014 - July 2015",
    location: "Vancouver BC, Canada",
  },
  {
    company: "Simon Fraser University",
    title: "Research Assistant",
    timeline: "September 2013 - December 2013",
    location: "Vancouver BC, Canada",
  },
];

const education = [
  {
    school: "Simon Fraser University",
    degree: "Master of Science in Personal Informatics",
    timeline: "September 2015 - March 2018",
    location: "Vancouver BC, Canada",
  },
  {
    school: "Simon Fraser University",
    degree: "Bachelor of Science in Interactive Arts and Technology",
    timeline: "January 2011 - December 2013",
    location: "Vancouver BC, Canada",
  },
];

const honours = [
  {
    honour: "Dean's Honour Roll",
    school: "Simon Fraser University",
    timeline: "Fall 2012 + Spring 2013",
    location: "Vancouver BC, Canada",
  },
  {
    honour: "Undergraduate Research Fellowship Award",
    school: "Simon Fraser University",
    timeline: "Spring 2013",
    location: "Vancouver BC, Canada",
  },
  {
    honour: "Bronze Medal from InfoMatrix",
    school: "Zaman International School",
    timeline: "2007",
    location: "Bucharest, Romania",
  },
];

export const query = graphql`
  query {
    file(relativePath: { eq: "profile_pic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function About({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Tim Bodyka Heng | About</title>
      </Helmet>
      <div className="mt-5">
        <h1 className="text-4xl font-black">
          <FontAwesomeIcon icon={faUserGraduate} className="mr-5 text-red" />
          Me?
        </h1>
      </div>
      <div className="sm:flex mt-5">
        <div className="w-full sm:w-2/5 mb-5 sm:mr-5 sm:mb-0">
          <Img fluid={data.file.childImageSharp.fluid} alt="Profile Picture" />
        </div>
        <div className="sm:w-3/5">
          <h2 className="text-2xl text-red mb-5">
            Let me tell you a bit about me.
          </h2>
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
      </div>
      <hr className="my-8" />
      <h1 className="text-4xl font-black mb-5">Qualifications</h1>
      <div className="sm:flex">
        <div className="w-full sm:w-1/2 pr-5">
          <h3 className="text-2xl">
            <FontAwesomeIcon icon={faBriefcase} className="text-1xl mr-3" />
            Experience
          </h3>
          {workExperience.map((item, index) => {
            return (
              <Qualification
                key={index}
                main={item.title}
                timeline={item.timeline}
                sub={item.company}
                link={item.link ? item.link : null}
                location={item.location}
              ></Qualification>
            );
          })}
        </div>

        <div className="w-full sm:w-1/2">
          <div className="mt-16 sm:mt-0">
            <h3 className="text-2xl">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-1xl mr-3"
              />
              Education
            </h3>
            {education.map((item, index) => {
              return (
                <Qualification
                  key={index}
                  main={item.school}
                  timeline={item.timeline}
                  sub={item.degree}
                  location={item.location}
                ></Qualification>
              );
            })}
          </div>
          <div className="mt-16">
            <h3 className="text-2xl">
              <FontAwesomeIcon icon={faAward} className="text-1xl mr-3" />
              Honours + Awards
            </h3>
            {honours.map((item, index) => {
              return (
                <Qualification
                  key={index}
                  main={item.honour}
                  timeline={item.timeline}
                  sub={item.school}
                  location={item.location}
                ></Qualification>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
