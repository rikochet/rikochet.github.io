import React from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions';
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

class Articles extends React.Component {

  constructor(props) {
    super();

    this.state = {
      loading: false,
      items: props.articles || []
    }
  }
  
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.setState({ loading: true });
    this.props.getArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.articles !== nextProps.articles) {
      this.setState({ items: nextProps.articles });
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
          renderEmpty={ () => <div>There are no articles..</div>}
          renderItem={ item => <PortfolioListItem item={item} key={item.id} /> }
        />
      </div>
    );
  }
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(Articles);
export default connect(mapStateToProps, { getArticles })(styledComponent);