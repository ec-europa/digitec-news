import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from '../Image';
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
      ? news.news.map((newsItem) => (
          <div className={newsletterRowStyles.row}>
            <article className={newsletterRowStyles.article} key={newsItem.id}>
              <Link
                to={newsItem.fields.slug}
                className={newsletterRowStyles.link}
              />
              {newsItem.frontmatter.picture && (
                <div className={newsletterRowStyles.articleImage}>
                  <Img
                    fluid={newsItem.frontmatter.picture.childImageSharp.fluid}
                    className={newsletterRowStyles.picture}
                    alt={newsItem.frontmatter.title}
                  />
                </div>
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
