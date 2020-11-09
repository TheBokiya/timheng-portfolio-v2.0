import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import LinkWithIcon from "../../components/linkWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/pro-light-svg-icons";
import TabsForMobile from "../../components/tabsForMobile";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "crime" }
      }
      sort: { fields: childImageSharp___fluid___originalName }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const sideInfo = [
  {
    group: "Technologies",
    icon: faToolbox,
    nodes: ["Procesing", "controlP5", "Unfolding Maps"],
  },
];

const responsibilities = [
  "Researching and retrieving the dataset",
  "Identifying what type of questions is the visualization supposed to answer",
  "Designing the visual representation of the collected dataset",
  "Developing the prototype",
];

const outcome = [
  "Able to work with both Processing and Eclipse to build a visual representation.",
  "Able to design and develop a good visual representation system to shows the data appropriately",
  "Able to analyze and work with large amount of data",
];

const githubLink = "https://github.com/TheBokiya/Crime--Climate---Population";

export default function CrimeClimatePopulation({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Crime, Climate and Population</title>
      </Helmet>
      <h1 className="text-4xl font-black">Crime, Climate and Population</h1>
      <h3 className="text-2xl text-red">
        just like you, criminals are more likely to be out on a sunny day.
      </h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/AW8lF-7vvKk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p>
            Crime, Climate and Population is a project that a partner and I made
            for Visual Analytics class. This project aims to answer whether
            there's a correlation between crime rate, annual climate and
            population in the U.S. The system reads three different datasets
            (csv files), crime rate data, climate data and population data. The
            data is presented using choropleth map to allow easy analysis and
            interaction with each individual state.
          </p>
          <hr className="my-5" />
          <div className="sm:flex">
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Responsibilities</h3>
              <ul className="px-3 list-disc">
                {responsibilities.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Take-Away</h3>
              <ul className="px-3 list-disc">
                {outcome.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-5" />
          {data.allFile.edges.map((item, index) => {
            return (
              <Img
                fluid={item.node.childImageSharp.fluid}
                key={index}
                className="my-5"
              />
            );
          })}
        </div>
        <div className="hidden sm:block sm:w-1/4 sm:pl-10">
          {sideInfo.map((i, iIndex) => (
            <div
              className="border-l-4 border-red px-5 my-10"
              key={"sideInfoGroup-" + iIndex}
            >
              <FontAwesomeIcon
                icon={i.icon}
                className="text-red mb-3 text-2xl"
              />
              <ul>
                {i.nodes.map((j, jIndex) => (
                  <li key={"sideInfoContent-" + jIndex}>{j}</li>
                ))}
              </ul>
            </div>
          ))}
          <LinkWithIcon
            icon={faGithub}
            link={githubLink}
            name="Visit Repository"
            className="inline-block justify-items-end"
            type="external"
          ></LinkWithIcon>
        </div>
      </div>
      <TabsForMobile list={sideInfo}></TabsForMobile>
      <div className="flex sm:hidden justify-end">
        <LinkWithIcon
          icon={faGithub}
          link={githubLink}
          name="Visit Repository"
          type="external"
        ></LinkWithIcon>
      </div>
    </Layout>
  );
}
