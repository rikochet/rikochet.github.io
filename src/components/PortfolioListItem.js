import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({ 
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PortfolioListItem(props) {
  const { classes, item } = props;

  return (
    <Paper className={classes.paper} elevation={1}>
      <Typography variant="h5" component="h3">
        {item.name}
      </Typography>
      <Typography component="p">
        {item.body}
      </Typography>
    </Paper>
  );
}

PortfolioListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioListItem);
