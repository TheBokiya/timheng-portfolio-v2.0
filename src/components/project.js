import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function renderImage(props, file) {
  return (
    <div className="w-full sm:w-1/2">
      <Link to={props.page}>
        <Img fluid={file.node.childImageSharp.fluid} />
        <div>{props.title}</div>
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
