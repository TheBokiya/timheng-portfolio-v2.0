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
    file(relativePath: { eq: "scienceworld/cover.png" }) {
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
    nodes: ["Heuristic Evaluation", "Observation", "Task Analysis"],
  },
];

const liveSite = "https://ssn.digital/";

export default function SSNWebsite({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Science World</title>
      </Helmet>
      <h1 className="text-4xl font-black">Science World Website</h1>
      <h3 className="text-2xl text-red">a heuristic evaluation</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="science-world-cover"
            className="mb-5"
          />
          <p>
            In a team of three people, we were tasked to perform a heuristic
            evaluation to find usability problems in Science World's website. We
            started off this project by coming up with a list of user's goals
            for the website such as checking out the schedule, buying tickets
            and booking a field trip etc.
          </p>
          <p>
            Once we had all the goals listed out, we then proceeded to task
            analysis by analyzing how those goals can be completed.
            Individually, we went through the tasks while using the websites to
            find usability problems. We gathered all the usability problems
            found and assessed the severity of the problems. Last but not least,
            we wrote a heuristic evaluation report discussing our findings and
            suggested improvements that we believe we help solving those
            usability problems. The report was later submitted to Science World.
          </p>
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
