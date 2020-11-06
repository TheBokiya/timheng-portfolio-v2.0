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
        <title>SSN Website</title>
      </Helmet>
      <h1 className="text-4xl font-black">SSN Website</h1>
      <h3 className="text-2xl text-red">Secure Settlment Network</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="ssn-cover"
            className="mb-5"
          />
          <p>
            Secure Settlement Network (SSN) is an open, neutral and secure
            payment authorization ledger; linking payment providers to merchants
            and customers.
          </p>
          <p>
            In this project, I was the Lead UI/UX Designer in charge of
            designing the website as well as the Team Lead to oversee the
            development of the website.
          </p>
          <h3 className="text-2xl mt-5 mb-3">Design</h3>
          <p>
            The design process of this project began with a pen-and-paper
            wireframe to draft out the flow and user-experience of the site. We
            then tested out the wireframe with the stakeholders to make sure the
            navigation and the structure are how the stakeholders envisioned it
            to be.
          </p>
          <p>
            We then proceeded to draft the first version of the high-fidelity
            mockup of the site using Adobe XD. In this part of the process, we
            were able to decide on the colour scheme and the overall look and
            feel for the site.
          </p>
          <h3 className="text-2xl mt-5 mb-3">Development</h3>
          <p>
            For this project, we decided to use Jekyll framework which was built
            using Ruby. This framework allows us to quickly transform the design
            from a high-fidelity mockup into a production-ready website. Because
            this is a very simple website with mainly static content, Jekyll
            proved to be the perfect choice for this project.
          </p>
          <hr className="my-5" />
          <div className="sm:flex">
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Responsibilities</h3>
              <ul className="px-3 list-disc">
                <li>Design the UI of the website</li>
                <li>Oversee the implementation of the website</li>
                <li>
                  Work with the creative team to request for suitable
                  illustrations
                </li>
                <li>Maintain and update the website as required</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl mt-5 mb-3">Take-Away</h3>
              <ul className="px-3 list-disc">
                <li>Able to design the whole website from scratch</li>
                <li>
                  Able to quickly transform a mockup into a production-ready
                  product
                </li>
                <li>
                  Able to lead and oversee the whole development of a website
                </li>
                <li>
                  Able to work with different teams to make sure that the
                  project stayed on track and completed on time
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/4 sm:pl-10">
          {sideInfo.map(i => (
            <div className="border-l-4 border-red px-5 my-10">
              <FontAwesomeIcon
                icon={i.icon}
                className="text-red mb-3 text-2xl"
              />
              <ul>
                {i.nodes.map(j => (
                  <li>{j}</li>
                ))}
              </ul>
            </div>
          ))}
          <LinkWithIcon
            icon={faBrowser}
            link={liveSite}
            name="Visit Live Site"
            className="inline-block justify-items-end"
          ></LinkWithIcon>
        </div>
      </div>
      <TabsForMobile list={sideInfo}></TabsForMobile>
      <div className="flex sm:hidden justify-end">
        <LinkWithIcon
          icon={faBrowser}
          link={liveSite}
          name="Visit Live Site"
        ></LinkWithIcon>
      </div>
    </Layout>
  );
}
