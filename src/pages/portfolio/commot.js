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
    file(relativePath: { eq: "ssn/cover.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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

const liveSite = "https://ssn.digital/";

export default function SSNWebsite({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Commot Webiste</title>
      </Helmet>
      <h1 className="text-4xl font-black">Commot Website</h1>
      <h3 className="text-2xl text-red">online trading services</h3>
      <div className="my-5 sm:flex"></div>
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
