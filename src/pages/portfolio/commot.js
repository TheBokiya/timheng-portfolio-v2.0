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
        relativeDirectory: { eq: "commot" }
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
    group: "Skillset",
    icon: faBrain,
    nodes: ["Wireframe", "Mockup", "Web Development"],
  },
  {
    group: "Technologies",
    icon: faToolbox,
    nodes: ["Adobe XD", "Jekyll Framework"],
  },
  {
    group: "Languages",
    icon: faCode,
    nodes: ["Ruby on Rails", "Liquid", "HTML", "SASS", "JS"],
  },
];

const liveSite = "https://commot.asia/";

export default function SSNWebsite({ data }) {
  const bannerImg = data.allFile.edges.find(
    img => img.node.relativePath === "commot/commot-desktop-4.png"
  );
  return (
    <Layout>
      <Helmet>
        <title>COMMO T Website</title>
      </Helmet>
      <h1 className="text-4xl font-black">COMMO T Website</h1>
      <h3 className="text-2xl text-red">online trading services</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <Img fluid={bannerImg.node.childImageSharp.fluid} />
          <p>
            COMMO T offers online trading services and products to institutional
            and retail clientele. This was a freelance project that I undertook
            in early 2020 for a local trading startup. I was commissioned to
            design a static website site from scratch.
          </p>
          <h3 className="text-2xl mt-5 mb-3">UI/UX Design</h3>
          <p>
            Like any other web development project, I began by make inquiries
            about the website that the client has invisioned. I then translated
            that onto a mockup. Once the mockup was ready, I presented to the
            client for review. I made sure to let the client know the rationales
            behind the design decisions that I made. I then made some changes
            based on the feedbacks from the client. This iterative process
            repeats about 3-4 times to make sure the client is absolutely happy
            with the mockup bofore moving forward to the development stage.
          </p>
          <h3 className="text-2xl mt-5 mb-3">Development</h3>
          <p>
            Once the development phase started, there were some small changes
            from the mockup as requested by the client. However, the final
            result came out to be as very close to the mockup presented to the
            client before. This website was built using Jekyll framework.
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
          <LinkWithIcon
            icon={faBrowser}
            link={liveSite}
            name="Visit Live Site"
            type="external"
          ></LinkWithIcon>
        </div>
      </div>
      <TabsForMobile list={sideInfo}></TabsForMobile>
      <div className="flex sm:hidden justify-end">
        <LinkWithIcon
          icon={faBrowser}
          link={liveSite}
          name="Visit Live Site"
          type="external"
        ></LinkWithIcon>
      </div>
    </Layout>
  );
}
