import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import EventsList from '../components/Event/List';
import containerStyles from '../utils/_container.module.scss';
import contentStyles from '../utils/_content.module.scss';

const PastEvents = props => {
  const { data } = props;
  const { edges: pastEvents } = data.allMarkdownRemark;

  const events = pastEvents.map(({ node: event }) => ({
    id: event.id,
    slug: event.fields.slug,
    title: event.frontmatter.title,
    html: event.html,
  }));

  return (
    <section className={containerStyles.container}>
      <Helmet title="PastEvents" />
      <div className={containerStyles.header}>
        <h1 className={contentStyles.fs10}>PastEvents</h1>
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

export const pageQuery = graphql`
  query PastEventsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/events/" } }) {
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

export default PastEvents;
