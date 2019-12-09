import { graphql } from 'gatsby';
import React from 'react';

export default ({ data }) => {
  return (
    <>
      {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
        <>
          <h1>{frontmatter.title}</h1>
          <p>{excerpt}</p>
        </>
      ))}
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
        }
      }
    }
  }
`;
