import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Project(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) => (
        <div>
          <Img
            fluid={
              images.edges.find(
                image => image.node.relativePath === props.cover
              ).node.childImageSharp.fluid
            }
          />
        </div>
      )}
    />
  );
}
