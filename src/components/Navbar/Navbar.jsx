import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';
import digitecLogo from '../../img/DIGITEC.svg';
import euLogo from '../../img/europe.svg';
import NavbarItem from './Item';
import NavbarSeparator from './Separator';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    // Bindings
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRequestToggleDrawer = this.handleRequestToggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);

    // Init
    this.header = null;
    this.navigation = null;
    this.headroom = null;

    this.state = {
      drawerOpen: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line global-require
    const Headroom = require('headroom.js');

    this.headroom = new Headroom(this.header, {
      offset: 6 * 16,
      tolerance: 5,
      classes: {
        unpinned: styles.headroomUnpinned,
        top: styles.headroomTop,
      },
    });

    this.headroom.init();
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('focus', this.handleFocusChange, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('focus', this.handleFocusChange);
    this.headroom.destroy();
  }

  handleFocusChange(event) {
    const { drawerOpen } = this.state;

    if (this.header.contains(document.activeElement)) {
      // Make sure to pin the header when a child is focused
      this.headroom.pin();

      // Toggle the drawer if it's closed
      if (!drawerOpen && this.navigation.contains(document.activeElement)) {
        this.setState({ drawerOpen: !drawerOpen });
        event.preventDefault();
      }
    } else if (drawerOpen) {
      this.setState({ drawerOpen: !drawerOpen });
      event.preventDefault();
    }
  }

  handleKeyDown(event) {
    const { drawerOpen } = this.state;

    // Close drawer on ESC
    if (drawerOpen && event.keyCode === 27) {
      event.preventDefault();
      this.setState({ drawerOpen: !drawerOpen });
    }
  }

  handleRequestToggleDrawer(event) {
    const { drawerOpen } = this.state;

    event.preventDefault();
    this.setState({ drawerOpen: !drawerOpen });
  }

  closeDrawer() {
    const { drawerOpen } = this.state;

    if (drawerOpen) {
      this.setState({ drawerOpen: !drawerOpen });
    }
  }

  render() {
    const { title } = this.props;
    const { drawerOpen } = this.state;

    return (
      <nav
        className={styles.container}
        ref={(c) => {
          this.header = c;
        }}
      >
        <input
          type="checkbox"
          id="toggleDrawer"
          className={styles.toggleDrawer}
          checked={drawerOpen}
          aria-label="Toggle the drawer"
        />
        <div className={styles.mobileBar}>
          <label
            htmlFor="toggleDrawer"
            className={styles.navToggle}
            onClick={this.handleRequestToggleDrawer}
            id="toggle-drawer"
            role="button"
            aria-label="Toggle the drawer"
          >
            <span />
            <span />
            <span />
          </label>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
        <label
          htmlFor="toggleDrawer"
          className={styles.overlay}
          onClick={this.handleRequestToggleDrawer}
          role="button"
          aria-label="Toggle the drawer"
        />
        <div className={styles.navigation} ref={(c) => (this.navigation = c)}>
          <div className={styles.innerNavbar}>
            <div className={styles.navigationHeader}>
              <div className={styles.logos}>
                <a
                  href="http://europa.eu/index_en.htm"
                  className={styles.logoEuropa}
                >
                  <img
                    src={euLogo}
                    alt="DIGITEC Newsletter"
                    className={styles.logo}
                  />
                </a>
                <Link to="/" className={styles.logoLink}>
                  <img
                    src={digitecLogo}
                    alt="DIGITEC Newsletter"
                    className={styles.logo}
                  />
                </Link>
              </div>
            </div>
            <ul className={styles.navLinks}>
              <NavbarItem to="/" onClick={this.closeDrawer}>
                Newsletter
              </NavbarItem>

              <NavbarItem to="/past-events" onClick={this.closeDrawer}>
                Past Events
              </NavbarItem>
              <NavbarSeparator />
              <NavbarItem
                to="https://twitter.com/hashtag/digitec18"
                target="_blank"
                rel="noopener noreferrer"
                mobileOnly
              >
                #digitec18
              </NavbarItem>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: '',
};

export default Navbar;
