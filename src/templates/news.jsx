import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

import NewsPage from '../components/News/Page';
import contentStyles from '../utils/_content.module.scss';

export const NewsTemplate = ({
  content,
  contentComponent,
  title,
  introduction,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      {helmet || ''}
      <NewsPage news={{ title, introduction }}>
        <PostContent className={contentStyles.content} content={content} />
      </NewsPage>
    </Fragment>
  );
};

NewsTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  introduction: PropTypes.string,
  helmet: PropTypes.object,
};

NewsTemplate.defaultProps = {
  contentComponent: null,
  title: '',
  introduction: '',
  helmet: null,
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
      html
    }
  }
`;
