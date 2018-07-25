/**
 *
 * Cover
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Img } from '../Image';

import styles from './Cover.module.scss';
import registerLogo from '../../img/register.svg';

const Cover = ({ image, title, heading, hashtag }) => (
  <div className={styles.coverContainer}>
    {image.childImageSharp && image.childImageSharp.sizes ? (
      <Img
        sizes={image.childImageSharp.sizes}
        alt="DIGITEC 2018"
        role="presentation"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
    ) : (
      <img
        src={image}
        alt="DIGITEC 2018"
        role="presentation"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />
    )}

    <div className={styles.coverTitleContainer}>
      <div className={styles.coverTitleContainerRow}>
        <h1>{title}</h1>
        <h2>{heading}</h2>
        <h2>
          <a
            href={`https://twitter.com/hashtag/${hashtag}`}
            className={styles.coverTwitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            #{hashtag}
          </a>
        </h2>
        <div className={styles.registerBlock}>
          <a
            href="https://scic.ec.europa.eu/ew/register/dgscic/DIGITEC_2018_11_20/e/lk/k/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerLink}
          >
            <img
              src={registerLogo}
              alt="Register"
              className={styles.registerLogo}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

Cover.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  heading: PropTypes.string,
  hashtag: PropTypes.string,
};

Cover.defaultProps = {
  image: '',
  title: '',
  heading: '',
  hashtag: '',
};

export default Cover;
