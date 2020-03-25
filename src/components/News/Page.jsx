import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from '../Image';

// Styles
import styles from './Page.module.scss';
import newsletterRowStyles from '../Newsletter/Row.module.scss';

const Page = ({ news, children }) => (
  <section className={styles.pageContainer}>
    <h1>{news.title}</h1>
    {children}
    <h3>See more news from this newsletter:</h3>
    {news.newsletters
      ? news.newsletters.map((newsletterItem) => (
          <div className={newsletterRowStyles.row}>
            <article
              className={newsletterRowStyles.article}
              key={newsletterItem.id}
            >
              <Link
                to={newsletterItem.fields.slug}
                className={newsletterRowStyles.link}
              />
              {newsletterItem.frontmatter.picture && (
                <div className={newsletterRowStyles.articleImage}>
                  <Img
                    fluid={
                      newsletterItem.frontmatter.picture.childImageSharp.fluid
                    }
                    className={newsletterRowStyles.picture}
                    alt={newsletterItem.frontmatter.title}
                  />
                </div>
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
