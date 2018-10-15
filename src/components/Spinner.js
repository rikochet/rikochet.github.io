import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { CircularProgress } from '@material-ui/core';

const styles = theme => ({ 
  loadingContainer: {
    paddingTop: theme.spacing.unit * 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function Spinner(props) {
  const { classes } = props;

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Spinner);
