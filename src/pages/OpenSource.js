import React from 'react';
import { connect } from 'react-redux';
import { getOpenSource } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FlatList from '../components/FlatList';
import Spinner from '../components/Spinner';
import PortfolioListItem from '../components/PortfolioListItem';

function mapStateToProps(state) {
  return state;
}

const styles = theme => ({
  root: {
    // paddingTop: theme.spacing.unit * 4,
  },
});

class OpenSource extends React.Component {

  constructor(props) {
    super();

    this.state = {
      loading: false,
      items: props.opensource || []
    }
  }
  
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.setState({ loading: true });
    this.props.getOpenSource();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.opensource !== nextProps.opensource) {
      this.setState({ items: nextProps.opensource });
    }
    this.setState({ loading: false });
  }

  render() {
    const { loading, items } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FlatList 
          items={items}
          isLoading={loading}
          renderLoading={ <Spinner /> }
          renderEmpty={ () => <div>There are no opensource projects..</div>}
          renderItem={ item => <PortfolioListItem item={item} key={item.id} /> }
        />
      </div>
    );
  }
}

OpenSource.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(OpenSource);
export default connect(mapStateToProps, { getOpenSource })(styledComponent);