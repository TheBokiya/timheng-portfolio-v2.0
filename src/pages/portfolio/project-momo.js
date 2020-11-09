import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import LinkWithIcon from "../../components/linkWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrowser,
  faCode,
  faToolbox,
  faBrain,
} from "@fortawesome/pro-light-svg-icons";
import TabsForMobile from "../../components/tabsForMobile";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "project-momo" }
      }
      sort: { fields: childImageSharp___fluid___originalName }
    ) {
      edges {
        node {
          relativePath
          extension
          publicURL
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
    nodes: ["Java", "JavaFX"],
  },
];

const responsibilities = [
  "Research and brainstorm ideas",
  "Build the physical model",
  "Program momo's behaviour",
];

const outcome = [
  "Able to design, prototype and produce a kinetic sculpture",
  "Able to study and understand the target users",
  "Able to do rapid prototyping",
  "Able to branstorm multiple ideas and work through different iterations",
  "Able to collaborate with colleagues to achieve a common goal",
];

export default function ProjectMomo({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Project MOMO</title>
      </Helmet>
      <h1 className="text-4xl font-black">Project MOMO</h1>
      <h3 className="text-2xl text-red">a robot with an attitude</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/GcQR1DROBk4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p>
            Momo is a robotic pet that keeps the user be aware of the light
            usage that the user is in. Momo likes to live in the dark, she can
            walk and breathe in the dark. However, when there's too much light
            in the room, she would panic and if being exposed to the light for
            too long she would eventually die. In order to bring her back to her
            calm happy life, the user must dim down or turn off the light.
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
            if (item.node.extension == "gif") {
              return (
                <img
                  src={item.node.publicURL}
                  key={index}
                  className="my-5 w-full"
                />
              );
            } else {
              return (
                <Img
                  fluid={item.node.childImageSharp.fluid}
                  key={index}
                  className="my-5"
                />
              );
            }
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
        </div>
      </div>
      <TabsForMobile list={sideInfo}></TabsForMobile>
    </Layout>
  );
}
