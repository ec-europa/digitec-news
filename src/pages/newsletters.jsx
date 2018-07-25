import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import NewsletterList from '../components/Newsletter/List';
import containerStyles from '../utils/_container.module.scss';
import contentStyles from '../utils/_content.module.scss';

const Newsletters = props => {
  const { data } = props;
  const { edges: newsletters } = data.allMarkdownRemark;

  const news = newsletters.map(({ node: newsletter }) => ({
    id: newsletter.id,
    slug: newsletter.fields.slug,
    title: newsletter.frontmatter.title,
  }));

  return (
    <section className={containerStyles.container}>
      <Helmet title="Newsletters" />
      <div className={containerStyles.header}>
        <h1 className={contentStyles.fs10}>Newsletters</h1>
      </div>

      <NewsletterList news={news} />
    </section>
  );
};

Newsletters.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query ProgrammeQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/newsletters/" } }
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Newsletters;
