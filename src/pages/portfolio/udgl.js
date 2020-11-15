import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faToolbox } from "@fortawesome/pro-light-svg-icons";
import TabsForMobile from "../../components/tabsForMobile";
import pdfFile from "../../assets/files/UDGLPaper.pdf";
import LinkWithIcon from "../../components/linkWithIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "udgl" }
      }
      sort: { fields: childImageSharp___fluid___originalName }
    ) {
      edges {
        node {
          relativePath
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
    nodes: ["Java", "JavaFX", "Jung: Java Graph Framework"],
  },
];

const responsibilities = [
  "Exploring different graph layouts that can help analysts with the sense-making process",
  "Built the prototype using javafx",
  "Write a paper report about the research",
];

const outcome = [
  "Able to do research and look for different approaches to solve a problem",
  "Able to learn a new language and use it to build a prototype in a short period of time",
];

const githubLink = "https://github.com/TheBokiya/UDGraphLayout";

const Udgl = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Exploring User-Definable Graph Layouts</title>
      </Helmet>
      <h1 className="text-4xl font-black">
        Exploring User-Definable Graph Layouts
      </h1>
      <h3 className="text-2xl text-red">a graph in a graph. a graphception.</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/WkfwKCKgz-c"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p>
            Graphs are a common type of data encountered by analysts. Social
            networks, co-author networks, and gene interactions can all be
            represented as graphs. These types of data can be difficult to
            understand without the aid of a visualization. Visual analytics
            tools with graph visualizations allows the analysts to view data as
            a node link diagram. Vertices or nodes represent objects. Edges
            represent the relationship between two nodes. To render graphs, a
            number of automatic graph layouts have been developed. These
            algorithms use properties of the graph, like the number of
            interconnections between nodes, to compute positions for the graph’s
            vertices. While these algorithms have a number of parameters that
            can be adjusted to affect the layout, they are automatic - no
            analyst input is used to position the graph nodes.
          </p>
          <p>
            I wrote a paper that discusses how automated graph layouts do not
            meet the needs of analysts and propose an interaction technique to
            better meet the needs of the analyst. I also built a prototype that
            helps with analysts with the sense-making process.
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
            icon={faFilePdf}
            link={pdfFile}
            name="Download PDF"
            className="inline-block justify-items-end"
            type="internal"
          ></LinkWithIcon>
          <LinkWithIcon
            icon={faGithub}
            link={githubLink}
            name="Visit Repository"
            className="inline-block justify-items-end"
            type="internal"
          ></LinkWithIcon>
        </div>
      </div>
      <TabsForMobile list={sideInfo}></TabsForMobile>
    </Layout>
  );
};

export default Udgl;
