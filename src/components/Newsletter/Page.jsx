import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

// Styles
import styles from './Page.module.scss';
import newsletterRowStyles from './Row.module.scss';

const Page = ({ news, children }) => (
  <section className={styles.pageContainer}>
    <h1>{news.title}</h1>
    <p>Published: {formatDate(news.date)}</p>
    {children}
    {news.news
      ? news.news.map(newsItem => (
          <div className={newsletterRowStyles.row}>
            <article className={newsletterRowStyles.article} key={newsItem.id}>
              <Link
                to={{ pathname: newsItem.fields.slug }}
                className={newsletterRowStyles.link}
              />
              {newsItem.frontmatter.picture ? (
                <Img
                  sizes={newsItem.frontmatter.picture.childImageSharp.sizes}
                  className={newsletterRowStyles.picture}
                  outerWrapperClassName={newsletterRowStyles.articleImage}
                  alt={newsItem.frontmatter.title}
                />
              ) : (
                ''
              )}
              <div className={newsletterRowStyles.articleContent}>
                <h3 className={newsletterRowStyles.title}>
                  {newsItem.frontmatter.title}
                </h3>
                {newsItem.frontmatter.introduction}
              </div>
            </article>
          </div>
        ))
      : ''}
  </section>
);

Page.propTypes = {
  news: PropTypes.object,
  children: PropTypes.object,
};

Page.defaultProps = {
  news: {},
};

export default Page;
