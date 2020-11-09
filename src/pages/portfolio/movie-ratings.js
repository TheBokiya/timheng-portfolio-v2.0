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
        relativeDirectory: { eq: "movie_ratings" }
      }
      sort: { fields: childImageSharp___fluid___originalName }
    ) {
      edges {
        node {
          relativePath
          extension
          publicURL
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
    nodes: ["Java", "JavaFX"],
  },
];

const responsibilities = [
  "Researching for appropriate data and toolset to be used for the project",
  "Developing the prototype",
];

const outcome = [
  "Able to understand and combine csv data with javafx to create a visualization",
];

const liveSite = "https://github.com/TheBokiya/MovieProject";

export default function MovieRatings({ data }) {
  const overallImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-04.png"
  );
  const actionImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-05.png"
  );
  const animationImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-06.png"
  );
  const comedyImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-07.png"
  );
  const dramaImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-08.png"
  );
  const docuImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-09.png"
  );
  const romanceImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-10.png"
  );
  const shortImg = data.allFile.edges.find(
    image => image.node.relativePath === "movie_ratings/movie_ratings-11.png"
  );
  const toggleImg = [
    actionImg,
    animationImg,
    comedyImg,
    dramaImg,
    docuImg,
    romanceImg,
    shortImg,
  ];

  const hoverGif1 = data.allFile.edges.find(
    gif => gif.node.relativePath === "movie_ratings/movie_ratings-01.gif"
  );
  const hoverGif2 = data.allFile.edges.find(
    gif => gif.node.relativePath === "movie_ratings/movie_ratings-02.gif"
  );
  const moveGif = data.allFile.edges.find(
    gif => gif.node.relativePath === "movie_ratings/movie_ratings-03.gif"
  );
  const titleGif = data.allFile.edges.find(
    gif => gif.node.relativePath === "movie_ratings/movie_ratings-12.gif"
  );
  return (
    <Layout>
      <Helmet>
        <title>Movie Ratings</title>
      </Helmet>
      <h1 className="text-4xl font-black">Movie Ratings</h1>
      <h3 className="text-2xl text-red">experimental work</h3>
      <div className="my-5 sm:flex">
        <div className="w-full sm:w-3/4">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/SfwQsnqXVQ4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p>
            This is a personal project that I've worked on. The objective of
            this project is to allow myself to explore and experiment what can
            be done by combining JavaFX and CSV data. This page will not be the
            same as other portfolio project pages on this site as I want this to
            be a project showcase and a blog post about the project, because why
            not?
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
          <p>
            Before I started working on this project, I knew I wanted to work
            with CSV data and JavaFX. I just wasn't sure what kind of data I'm
            interested in working on. I came across a movie dataset in CSV file
            format that has ratings information about movies and I felt that
            this would be a fun and interesting project to work on. In this
            post, I will discuss about the features implemented into the
            visualization, approaches and challenges that came up during the
            development process. Source code can be accessed through GitHub.
          </p>
          <Img
            fluid={overallImg.node.childImageSharp.fluid}
            alt="overall-ui"
            className="mb-5"
          />
          <p>
            The UI of the applcation is split into two parts, the canvas and the
            control toolbar. The canvas holds all the drawings and manipulations
            of the circles while the toolbar holds necessary UI control
            components that allows the user to interact with the data. These are
            the UI control components.
          </p>
          <ul>
            <li>
              <span className="font-bold">Year Slider</span>: allows the user to
              control the year that movies are released between 1970-2005
            </li>
            <li>
              <span className="font-bold">Show All</span>: would tell the
              application to disable the year slider control and show all movies
              between 1970-2005
            </li>
            <li>
              <span className="font-bold">Genre Toggle Buttons</span>: toggle
              the canvas between different genres, action, animation, comedy,
              drama, comentary, romance and short film.
            </li>
          </ul>
          {toggleImg.map((item, index) => {
            return (
              <Img
                fluid={item.node.childImageSharp.fluid}
                key={index}
                className="my-5 w-full"
              />
            );
          })}
          <p>
            Various interactions are also implemented in this application.
            Circles change the fill and stroke color when mouse is hovered over
            and change back when the mouse leave.
          </p>
          <img src={hoverGif1.node.publicURL} className="my-5 w-full" />
          <img src={hoverGif2.node.publicURL} className="my-5 w-full" />
          <p>Circles can also be moved independently around the canvas.</p>
          <img src={moveGif.node.publicURL} className="my-5 w-full" />
          <p>
            Last but not least, the title and rating of the movie is displayed
            on the toolbar when the circle is clicked.
          </p>
          <img src={titleGif.node.publicURL} className="my-5 w-full" />
          <p>
            Obviously, this project can be improved. My future plans for this
            project are to implement a search option that allows the user to
            type in the movie's title. Other search filter algorithms should be
            implemented as well such filter the movies by ratings. I'd also like
            to improve the application in a way that would support a movie with
            multiple types of genres because currently it can only switch
            between any individual genre.
          </p>
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
