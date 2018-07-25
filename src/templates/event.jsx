import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

import NewsletterPage from '../components/Event/Page';
import contentStyles from '../utils/_content.module.scss';

export const NewsletterTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      {helmet || ''}
      <NewsletterPage newsletter={{ title }}>
        <PostContent className={contentStyles.content} content={content} />
      </NewsletterPage>
    </Fragment>
  );
};

NewsletterTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

NewsletterTemplate.defaultProps = {
  contentComponent: null,
  title: '',
  helmet: null,
};

const Newsletter = ({ data }) => {
  const { markdownRemark: newsletter } = data;

  return (
    <NewsletterTemplate
      content={newsletter.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={newsletter.frontmatter.title} />}
      title={newsletter.frontmatter.title}
    />
  );
};

Newsletter.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default Newsletter;

export const pageQuery = graphql`
  query PastEventByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
