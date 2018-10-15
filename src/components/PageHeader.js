import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonAppBar from './CustomAppBar';

const styles = theme => ({
  heroUnit: {
    background: "url('/assets/images/eagle-flying-in-fog.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
  },
  heroContent: {
    padding: `0 ${theme.spacing.unit * 8}px ${theme.spacing.unit * 2}px`,
  },
  heroProfile: {
    marginBottom: 14 +'px',
  },
  heroProfileAvatar: {
    height: 100,
    width: 100,
  },
  heroProfileUsername: {
    fontSize: 1.4 + 'em',
    color: 'rgba(255,255,255,0.8)',
  },
  heroProfileDescription: {
    fontSize: 1 + 'em',
    color: 'white'
  },
  heroTickerTitle: {
    fontSize: 0.9+'em',
    color: 'rgba(255,255,255,0.8)',
  },
  heroTickerValue: {
    color: 'white',
  },
  
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  heroLink: {
    color: 'white',
    textDecoration: 'none',
  },
  heroLinkActive: {
    //
  },
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileGridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  gridSpacer: {
    width: 80 +'px',
  },
  gridAction: {
    borderBottomWidth: 10 + 'px',
    borderBottomColor: 'blue',
  },
});

function PageHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <ButtonAppBar transparent />

            <div className={classes.heroContent}>
              <div className={classes.heroProfile}>
                <Grid container spacing={16}>
                  <Grid item>
                    <Avatar 
                      alt = "Avatar for Developer"
                      // src="/assets/images/avatar.jpg" 
                      src="//avatars2.githubusercontent.com/u/1213193" 
                      className={classes.heroProfileAvatar} />
                  </Grid>
                  <Grid item className={classes.profileGridColumn}>
                    <span className={classes.heroProfileUsername}>
                      rikochet
                    </span>
                    <span className={classes.heroProfileDescription}>
                      Full Stack Developer
                    </span>
                  </Grid>
                </Grid>
              </div>

              <div>
                <Grid container spacing={40}>
                  {/*}
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerTitle}>OpenSource</span>
                    <span className={classes.heroTickerValue}>4</span>
                  </Grid>
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerTitle}>Portfolio</span>
                    <span className={classes.heroTickerValue}>2</span>
                  </Grid>
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerTitle}>Articles</span>
                    <span className={classes.heroTickerValue}>1</span>
                  </Grid>

                  <Grid item className={classes.gridSpacer}>
                  </Grid>
                  {*/}
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerValue}>
                      <NavLink 
                        to="/"
                        className={classes.heroLink}
                        activeClassName={classes.heroLinkActive}>
                        <FontAwesomeIcon icon={['fal', 'home']} /> Home
                      </NavLink>
                    </span>
                  </Grid>
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerValue}>
                      <NavLink 
                        to="/opensource"
                        className={classes.heroLink}
                        activeClassName={classes.heroLinkActive}>
                        <FontAwesomeIcon icon={['fal', 'code-branch']} /> Open Source
                      </NavLink>
                    </span>
                  </Grid>
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerValue}>
                      <NavLink 
                        to="/portfolio"
                        className={classes.heroLink}
                        activeClassName={classes.heroLinkActive}>
                        <FontAwesomeIcon icon={['fal', 'project-diagram']} /> Portfolio
                      </NavLink>
                    </span>
                  </Grid>
                  <Grid item className={classes.gridColumn}>
                    <span className={classes.heroTickerValue}>
                      <NavLink 
                        to="/articles"
                        className={classes.heroLink}
                        activeClassName={classes.heroLinkActive}>
                        <FontAwesomeIcon icon={['fal', 'file-alt']} /> Articles
                      </NavLink>
                    </span>
                  </Grid>
                </Grid>
              </div>
              
            </div>

          </div>
        </main>
    </div>
  );
}

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageHeader);
