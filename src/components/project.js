import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import thumbnailStyle from "../assets/styles/thumbnail.module.css";

function renderImage(props, file) {
  return (
    <div className="w-full sm:w-1/3 px-1 my-5">
      <Link to={props.page} className="static">
        <div className="relative">
          <Img
            fluid={file.node.childImageSharp.fluid}
            className={"w-full z-0 " + thumbnailStyle.thumbnail}
          />
          <div className="bg-grey-light p-3 text-navy font-bold inline-block z-10 absolute -mt-8 ml-5">
            {props.title}
          </div>
        </div>
      </Link>
    </div>
  );
}

const Project = function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { sourceInstanceName: { eq: "coverImages" } }
          ) {
            edges {
              node {
                extension
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
      `}
      render={data => {
        const image = data.images.edges.find(
          image => image.node.relativePath === props.cover
        );
        return renderImage(props, image);
      }}
    />
  );
};

export default Project;
