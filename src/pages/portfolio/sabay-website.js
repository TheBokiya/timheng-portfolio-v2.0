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
    file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "sabay/cover.png" }
    ) {
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
    nodes: ["Mockup", "Web Development", "Communication + Collaboration"],
  },
  {
    group: "Technologies",
    icon: faToolbox,
    nodes: ["Jekyll Framework"],
  },
  {
    group: "Languages",
    icon: faCode,
    nodes: ["Ruby on Rails", "Liquid", "HTML", "SASS", "JS"],
  },
];

const responsibilities = [
  "Work with another lead designer to design the website",
  "Offer my knowledge and expertise ui/ux design during the conceptualization phase",
  "Oversee the website development by delegating work to a web developer",
];

const outcome = [
  "Able to work with another designer to design and implement the website",
  "Able to lead a small team to develop a relatively content-heavy website",
  "Able to work with various stakeholders to come up with new content for the website",
];

const liveSite = "https://sabay.com/";

const SabayWebsite = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Sabay Website</title>
      </Helmet>
      <h1 className="text-4xl font-black">Sabay Website</h1>
      <h3 className="text-2xl text-red">a new coporate website</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="sabay-cover"
            className="mb-5"
          />
          <p>
            In late 2019, Sabay were looking to redesign their corporate website
            as it was, at that time, outdated and did not reflect the value and
            the company very well. I was assigned as a Development Lead to
            oversee the development of the website.
          </p>
          <p>
            In this project, I worked with a Lead Designer who designed the
            majority of the new Sabay website.
          </p>
          <h3 className="text-2xl mt-5 mb-3">Development</h3>
          <p>
            For this project, we decided to use Jekyll framework which was built
            using Ruby. We decided to use Jekyll because this corporate website
            is a simple static website with very few pages.
          </p>
          <hr className="my-5" />
          <div className="sm:flex">
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Responsibilities</h3>
              <ul className="px-3 list-disc">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Outcome</h3>
              <ul className="px-3 list-disc">
                {outcome.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
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
            className="inline-block justify-items-end"
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
};

export default SabayWebsite;
