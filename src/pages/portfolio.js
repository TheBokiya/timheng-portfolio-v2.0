import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const portfolio = [
  {
    group: "Development",
    projects: [
      {
        title: "SSN Website",
        page: "/portfolio/ssn-website",
      },
      {
        title: "Sabay Corporate Website",
      },
      {
        title: "FAM",
      },
      {
        title: "SWAPP",
      },
    ],
  },
  {
    group: "Visual Analytics",
    projects: [
      {
        title: "Exploring User-Definable Graph Layouts",
      },
      {
        title: "Crime, Climate & Population",
      },
      {
        title: "Movie Ratings Viz",
      },
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
        <h1 className="text-4xl font-black mb-5">What I've Done</h1>
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
          <div>
            <h3>{i.group}</h3>
            <div className="flex">
              {i.projects.map((j, index) => {
                <div className="sm:w-1/2">{j.title}</div>;
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
