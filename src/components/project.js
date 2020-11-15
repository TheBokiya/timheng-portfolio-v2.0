import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import thumbnailStyle from "../assets/styles/thumbnail.module.css";

function renderImage(props, file) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 my-5">
      <Link to={props.page} className="static">
        <div className="relative">
          <div className="overflow-hidden">
            <Img
              fluid={file.node.childImageSharp.fluid}
              className={thumbnailStyle.thumbnail + " w-full z-0"}
            />
          </div>
          <div className="bg-grey-light px-3 py-2 text-navy font-bold inline-block z-10 absolute -mt-6 ml-5 text-sm">
            {props.title}
          </div>
        </div>
      </Link>
    </div>
  );
}

const Project = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              sourceInstanceName: { eq: "images" }
              relativeDirectory: { eq: "thumbnails" }
            }
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
      `}
      render={data => {
        const image = data.allFile.edges.find(
          image => image.node.relativePath === "thumbnails/" + props.cover
        );
        return renderImage(props, image);
      }}
    />
  );
};

export default Project;
