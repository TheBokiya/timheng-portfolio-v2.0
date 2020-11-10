import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import LinkWithIcon from "../../components/linkWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrowser, faToolbox } from "@fortawesome/pro-light-svg-icons";
import TabsForMobile from "../../components/tabsForMobile";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "fam" }
      }
      sort: { fields: childImageSharp___fluid___originalName }
    ) {
      edges {
        node {
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
    nodes: [
      "Java",
      "XML",
      "Android SDK",
      "MySQL",
      "Apache Commons",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
  },
];

const responsibilities = [
  "Researching and brainstorming ideas",
  "Wireframing and designing UI mockups",
  "Implementing photo gallery feature with FTP",
  "Implementing image storage solution",
  "Implementing app widget",
];

const outcome = [
  "Able to brainstorm, design and build an android app from scratch",
  "Able to do research and look for different approaches to solve a problem",
  "Able to do research and look for different approaches to solve a problem",
  "Able to work in small team to create a medium size project",
];

const liveSite = "https://sabay.com/";

export default function Fam({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>FAM</title>
      </Helmet>
      <h1 className="text-4xl font-black">FAM</h1>
      <h3 className="text-2xl text-red">a social-media app for family</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/sptYrJaehKo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p>
            Fam is an android application that is made for an Android
            application development class. It&apos;s a utility app that helps
            connecting members of busy families through out the day. It is a
            central hub for family communication, allowing family members to
            stay up-to-date with one another without having to open multiple
            applications and social networking sites. Connect calendars to
            coordinate schedules, post messages to a central board, swipe
            gestures for immediate one-touch notifications, share photos,
            organize check lists, and constantly remain aware of each other’s
            whereabouts. Simple, quick, and intuitive. Fam’s comprehensive list
            of communication tools and utilities ensures families stay
            organized, updated, and most importantly, connected to one another.
            Fam is an app built by me with a partner.
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
}
