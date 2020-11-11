import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/pro-light-svg-icons";
import TabsForMobile from "../../components/tabsForMobile";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "whatsapp" }
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
    nodes: ["Pencils", "Papers", "Adobe Illustrator", "Adobe Photoshop"],
  },
];

export default function WhatsappConceptualDesign({ data }) {
  const bannerImg = data.allFile.edges.find(
    image => image.node.relativePath === "whatsapp/whatsapp-01.png"
  );
  return (
    <Layout>
      <Helmet>
        <title>Whatsapp</title>
      </Helmet>
      <h1 className="text-4xl font-black">Whatsapp</h1>
      <h3 className="text-2xl text-red">a conceptual design</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <Img
            fluid={bannerImg.node.childImageSharp.fluid}
            alt="swapp-banner"
            className="mb-5"
          />
          <p>
            As a regular WhatsApp user, I believe WhatsApp's UI can be improved
            to provide a better user experience than the current design. This is
            my personal project that I worked on by designing an alternative
            WhatsApp's UI for iOS 7. Minimalistic design with clear sense of app
            navigation and context would give the user the freedom to control
            the flow of the app. It's not always about how things look, but it's
            also about the flow and the functionalties of a product. True story.
          </p>
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
