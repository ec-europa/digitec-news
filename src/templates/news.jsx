import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

import NewsPage from '../components/News/Page';
import contentStyles from '../utils/_content.module.scss';

export const NewsTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  introduction,
  newsletters,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      {helmet || ''}
      <NewsPage news={{ title, introduction, newsletters }}>
        <PostContent className={contentStyles.content} content={content} />
      </NewsPage>
    </Fragment>
  );
};

NewsTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
  title: PropTypes.string,
  introduction: PropTypes.string,
  newsletters: PropTypes.array,
};

NewsTemplate.defaultProps = {
  contentComponent: null,
  helmet: null,
  title: '',
  introduction: '',
  newsletters: [],
};

const News = ({ data }) => {
  const { markdownRemark: news } = data;

  return (
    <NewsTemplate
      content={news.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={news.frontmatter.title} />}
      title={news.frontmatter.title}
      introduction={news.frontmatter.introduction}
      newsletters={news.fields.newsletters}
    />
  );
};

News.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default News;

export const pageQuery = graphql`
  query NewsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        introduction
      }
      fields {
        newsletters {
          id
          excerpt
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
          }
        }
      }
      html
    }
  }
`;
