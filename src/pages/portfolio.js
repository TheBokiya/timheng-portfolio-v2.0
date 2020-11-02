import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import Project from "../components/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassesAlt } from "@fortawesome/pro-light-svg-icons";

const portfolio = [
  {
    group: "Development",
    projects: [
      {
        title: "SSN Website",
        cover: "ssn-thumbnail.png",
        page: "/portfolio/ssn-website",
      },
      {
        title: "Sabay Corporate Website",
        cover: "sabay-thumbnail.png",
        page: "/portfolio/sabay-corp-website",
      },
      {
        title: "FAM",
        cover: "fam-thumbnail.png",
        page: "/portfolio/fam",
      },
      {
        title: "SWAPP",
        cover: "swapp-thumbnail.png",
        page: "/portfolio/swapp",
      },
      {
        title: "COMMOT",
        cover: "commot-thumbnail.png",
        page: "/portfolio/commot",
      },
    ],
  },
  {
    group: "Visual Analytics",
    projects: [
      {
        title: "Exploring User-Definable Graph Layouts",
        cover: "udgl-thumbnail.png",
        page: "/portfolio/udgl",
      },
      {
        title: "Crime, Climate & Population",
        cover: "ccp-thumbnail.png",
        page: "/portfolio/crime-climate-population",
      },
      // {
      //   title: "Movie Ratings Viz",
      // },
    ],
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <Helmet>
        <title>Tim Bodyka Heng | Portfolio</title>
      </Helmet>
      <div className="mt-5">
        <h1 className="text-4xl font-black mb-5">
          <FontAwesomeIcon icon={faGlassesAlt} className="mr-5 text-red" />
          What I've Done
        </h1>
        <p>
          As a designer with a programming background, I became a front-end
          developer and have developed interests in ux/ui design, web
          development and visual analytics. For the past few years, I've worked
          on numerous web applications mainly as a UI/UX designer and front-end
          developer.
        </p>
        <p>
          My academic career has also shaped my interest in research-focused
          projects mostly in the scope of visual analytics and personal
          informatics.
        </p>
        <p>Below are some of my favourite projects that I've worked on.</p>
      </div>
      <hr className="my-8" />
      {portfolio.map((i, index) => {
        return (
          <div className="mb-10" key={index}>
            <h3 className="text-2xl mb-5">{i.group}</h3>
            <div className="flex flex-wrap">
              {i.projects.map((j, index) => {
                return (
                  <Project
                    key={index}
                    page={j.page}
                    title={j.title}
                    cover={j.cover}
                  ></Project>
                );
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
