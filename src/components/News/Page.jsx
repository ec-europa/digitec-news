import React from 'react';
import Link from 'gatsby-link';
import { Img } from '../Image';
import PropTypes from 'prop-types';

// Styles
import styles from './Page.module.scss';
import newsletterRowStyles from '../Newsletter/Row.module.scss';

const Page = ({ news, children }) => (
  <section className={styles.pageContainer}>
    <h1>{news.title}</h1>
    {children}
    <h3>See more news from this newsletter:</h3>
    {news.newsletters
      ? news.newsletters.map(newsletterItem => (
          <div className={newsletterRowStyles.row}>
            <article
              className={newsletterRowStyles.article}
              key={newsletterItem.id}
            >
              <Link
                to={{ pathname: newsletterItem.fields.slug }}
                className={newsletterRowStyles.link}
              />
              {newsletterItem.frontmatter.picture ? (
                <Img
                  sizes={
                    newsletterItem.frontmatter.picture.childImageSharp.sizes
                  }
                  className={newsletterRowStyles.picture}
                  outerWrapperClassName={newsletterRowStyles.articleImage}
                  alt={newsletterItem.frontmatter.title}
                />
              ) : (
                ''
              )}
              <div className={newsletterRowStyles.articleContent}>
                <h3 className={newsletterRowStyles.title}>
                  {newsletterItem.frontmatter.title}
                </h3>
                {newsletterItem.excerpt}
              </div>
            </article>
          </div>
        ))
      : ''}
  </section>
);

Page.propTypes = {
  news: PropTypes.object,
  children: PropTypes.func.isRequired,
};

Page.defaultProps = {
  news: {},
};

export default Page;
