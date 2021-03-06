import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import EventsList from '../components/Event/List';
import containerStyles from '../utils/_container.module.scss';
import contentStyles from '../utils/_content.module.scss';

const PastEvents = (props) => {
  const { data } = props;
  const { edges: pastEvents } = data.allMarkdownRemark;

  const events = pastEvents.map(({ node: event }) => ({
    id: event.id,
    title: event.frontmatter.title,
    url: event.frontmatter.url,
    date: event.frontmatter.date,
    excerpt: event.excerpt,
    picture: event.frontmatter.picture.childImageSharp,
  }));

  return (
    <section className={containerStyles.container}>
      <Helmet title="Past Events" />
      <div className={containerStyles.header}>
        <h1 className={contentStyles.fs10}>Past Events</h1>
      </div>

      <EventsList events={events} />
    </section>
  );
};

PastEvents.propTypes = {
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
      filter: { fileAbsolutePath: { regex: "/events/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            url
            date
            picture {
              childImageSharp {
                fluid(maxWidth: 260) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PastEvents;
