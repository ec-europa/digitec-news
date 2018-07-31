import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

import NewsletterPage from '../components/Newsletter/Page';
import contentStyles from '../utils/_content.module.scss';

export const NewsletterTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  date,
  news,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      {helmet || ''}
      <NewsletterPage news={{ title, date, news }}>
        <PostContent className={contentStyles.content} content={content} />
      </NewsletterPage>
    </Fragment>
  );
};

NewsletterTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  news: PropTypes.array,
};

NewsletterTemplate.defaultProps = {
  contentComponent: null,
  helmet: null,
  title: '',
  date: '',
  news: [],
};

const Newsletter = ({ data }) => {
  const { markdownRemark: news } = data;

  return (
    <NewsletterTemplate
      content={news.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={news.frontmatter.title} />}
      title={news.frontmatter.title}
      date={news.frontmatter.date}
      news={news.fields.news}
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
  query NewsletterByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      fields {
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
      html
    }
  }
`;
