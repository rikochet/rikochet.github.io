import React from 'react';
import { connect } from 'react-redux';
import { getPortfolio } from '../actions';
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

class Portfolio extends React.Component {

  constructor(props) {
    super();

    this.state = {
      loading: false,
      items: props.portfolio || []
    }
  }
  
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.setState({ loading: true });
    this.props.getPortfolio();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.portfolio !== nextProps.portfolio) {
      this.setState({ items: nextProps.portfolio });
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
          renderEmpty={ () => <div>There are no items in the portfolio..</div>}
          renderItem={ item => <PortfolioListItem item={item} key={item.id} /> }
        />
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(Portfolio);
export default connect(mapStateToProps, { getPortfolio })(styledComponent);