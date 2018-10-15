import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  transparent: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function CustomAppBar(props) {
  const { classes, transparent } = props;

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        color="default" 
        className={ transparent ? classes.transparent : null}>
        <Toolbar>
          <IconButton className={classes.menuButton} color={transparent ? "inherit" : "default"} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {/* Page Title */}
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <a 
              href="//github.com/rikochet" 
              alt="View Github account for @rikochet"
              style={{color: 'white', textDecoration: 'none'}}>
              <FontAwesomeIcon icon={['fab', 'github']} /> Github
            </a>
          </Typography>
          <Button color="inherit">
            <FontAwesomeIcon icon={['far', 'ellipsis-v']} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  transparent: PropTypes.bool,
};

export default withStyles(styles)(CustomAppBar);
