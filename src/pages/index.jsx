import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import NewsletterList from '../components/Newsletter/List';
import containerStyles from '../utils/_container.module.scss';
import contentStyles from '../utils/_content.module.scss';

const Newsletters = props => {
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
    <Fragment>
      <Jumbotron
        title="DIGITEC Newsletter"
        intro="This is some intro"
        readMoreLink="/"
      />
      <section className={containerStyles.container}>
        <Helmet title="Newsletters" />

        <div className={containerStyles.header}>
          <h1 className={contentStyles.fs10}>Newsletter</h1>
        </div>

        <NewsletterList newsletters={newsletters} />
      </section>
    </Fragment>
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
  query NewslettersQuery {
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
                sizes(maxWidth: 260) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
          fields {
            slug
            news {
              id
              frontmatter {
                title
                picture {
                  childImageSharp {
                    sizes(maxWidth: 260) {
                      ...GatsbyImageSharpSizes_withWebp
                    }
                  }
                }
                introduction
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default Newsletters;
