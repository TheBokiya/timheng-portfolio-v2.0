import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
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
    file(relativePath: { eq: "sabay/cover.png" }) {
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
    node: ["Jekyll Framework"],
  },
  {
    group: "Languages",
    icon: faCode,
    node: ["Ruby on Rails", "Liquid", "HTML", "SASS", "JS"],
  },
];

const liveSite = "https://sabay.com/";

export default function SabayWebsite({ data }) {
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
                <li>Work with another lead designer to design the website</li>
                <li>
                  Offer my knowledge and expertise ui/ux design during the
                  conceptualization phase
                </li>
                <li>
                  Oversee the website development by delegating work to a web
                  developer
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Outcome</h3>
              <ul className="px-3 list-disc">
                <li>
                  Able to work with another designer to design and implement the
                  website
                </li>
                <li>
                  Able to lead a small team to develop a relatively
                  content-heavy website
                </li>
                <li>
                  Able to work with various stakeholders to come up with new
                  content for the website
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
