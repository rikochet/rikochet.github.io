import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  
});

function FlatList(props) {
  const { items, renderItem, renderLoading, renderEmpty, isLoading } = props;

  if (isLoading === true) {
    return renderLoading ? renderLoading : <div>Loading...</div>
  } else {
    return items.length > 0 ?
      items.map(item => {
        return renderItem(item);
      })
      : renderEmpty ? renderEmpty() : null;
  }
}

FlatList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.any,
  isLoading: PropTypes.bool,
  renderLoading: PropTypes.object,
};

export default withStyles(styles)(FlatList);
