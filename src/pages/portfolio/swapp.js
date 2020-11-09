import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHandshake } from "@fortawesome/pro-light-svg-icons";
import TabsForMobile from "../../components/tabsForMobile";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "swapp" }
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
    group: "Collaborators",
    icon: faHandshake,
    nodes: [
      "Simon Fraser University",
      "BC Children's Hospital",
      "Emily Carr University",
    ],
  },
  {
    group: "Languages",
    icon: faCode,
    nodes: ["Ruby on Rails", "HTML", "SASS", "JS"],
  },
];

const responsibilities = [
  "Assist with the wireframes",
  "Implement the design",
  "Collaborate with other designers to come up with design solutions",
];

const outcome = [
  "Able to implement the design that was passed on from the design team",
  "Able to make changes and adjustments by collaborating with the design team",
  "Able to build a full functioning web app with a small team (a back-end + a front-end)",
];

export default function Swapp({ data }) {
  const bannerImg = data.allFile.edges.find(
    image => image.node.relativePath === "swapp/swapp-05.png"
  );
  return (
    <Layout>
      <Helmet>
        <title>SWAPP</title>
      </Helmet>
      <h1 className="text-4xl font-black">SWAPP</h1>
      <h3 className="text-2xl text-red">a sleep-wake app</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <Img
            fluid={bannerImg.node.childImageSharp.fluid}
            alt="swapp-banner"
            className="mb-5"
          />
          <h3 className="text-2xl mt-5 mb-3">Problem</h3>
          <p>
            Parents of children with brain-based disabilities record a large
            amount of information about their child’s medication, sleep, and
            wake behaviours. Every parent has their own. The sheer quantity of
            medical and non-medical records can be overwhelming for the parents
            and the clinicians.
          </p>
          <h3 className="text-2xl mt-5 mb-3">Solution</h3>
          <p>
            We created SWAPP to help parents and clinicians track a child’s
            behaviours. The app adopts a user-centered approach to collecting
            information, allowing parents to ‘own their data’ and individualize
            what they keep track of on a long-term bases, while also tracking
            short-term data that is requested by a clinician — such as positive
            or negative effects of a prescribed medication — allowing for
            immediate follow up, if necessary.
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
        </div>
      </div>
      <TabsForMobile list={sideInfo}></TabsForMobile>
    </Layout>
  );
}
