import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import NewsletterList from '../components/Newsletter/List';
import containerStyles from '../utils/_container.module.scss';
import contentStyles from '../utils/_content.module.scss';

const Newsletters = (props) => {
  const { data } = props;
  const { edges } = data.allMarkdownRemark;

  const newsletters = edges.map(({ node: newsletter }) => ({
    id: newsletter.id,
    slug: newsletter.fields.slug,
    title: newsletter.frontmatter.title,
    date: newsletter.frontmatter.date,
    picture: newsletter.frontmatter.picture.childImageSharp,
    excerpt: newsletter.excerpt,
    html: newsletter.html,
  }));

  return (
    <>
      <section className={containerStyles.container}>
        <Helmet title="Newsletters" />

        <div className={containerStyles.header}>
          <h1 className={contentStyles.fs10}>Newsletter</h1>
        </div>

        <NewsletterList newsletters={newsletters} />
      </section>
    </>
  );
};

Newsletters.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/newsletters/" } }
    ) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
            date
            picture {
              childImageSharp {
                fluid(maxWidth: 260) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Newsletters;
