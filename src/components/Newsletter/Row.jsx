import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from './Row.module.scss';
import formatDate from '../../utils/formatDate';

const Row = ({ newsletter }) => (
  <Fragment>
    <div className={styles.row}>
      <div className={styles.date}>{formatDate(newsletter.date)}</div>
      <article className={styles.article} key={newsletter.title}>
        <Link to={{ pathname: newsletter.slug }} className={styles.link} />
        {newsletter.picture ? (
          <Img
            sizes={newsletter.picture.sizes}
            className={styles.picture}
            outerWrapperClassName={styles.articleImage}
            alt={newsletter.title}
          />
        ) : (
          ''
        )}
        <div className={styles.articleContent}>
          <h3 className={styles.title}>{newsletter.title}</h3>
          {newsletter.excerpt}
        </div>
      </article>
    </div>
    {newsletter.news
      ? newsletter.news.map(newsItem => (
          <div className={styles.row}>
            <div className={styles.date} />
            <article className={styles.article} key={newsItem.id}>
              <Link
                to={{ pathname: newsItem.fields.slug }}
                className={styles.link}
              />
              {newsItem.frontmatter.picture ? (
                <Img
                  sizes={newsItem.frontmatter.picture.childImageSharp.sizes}
                  className={styles.picture}
                  outerWrapperClassName={styles.articleImage}
                  alt={newsItem.frontmatter.title}
                />
              ) : (
                ''
              )}
              <div className={styles.articleContent}>
                <h3 className={styles.title}>{newsItem.frontmatter.title}</h3>
                {newsItem.frontmatter.introduction}
              </div>
            </article>
          </div>
        ))
      : ''}
  </Fragment>
);

Row.propTypes = {
  newsletter: PropTypes.object,
};

Row.defaultProps = {
  newsletter: {},
};

export default Row;
