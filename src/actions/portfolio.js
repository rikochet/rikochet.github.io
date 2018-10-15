import * as types from './types';
import { firebase } from '../firestore';

let db = firebase.firestore();

export function getPortfolio() {
  return (dispatch, getState) => {
    db.collection("projects").get().then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
      });
      dispatch(updatePortfolio(items));
    });
  }
}

export function updatePortfolio(portfolioItems) {
  return {
    type: types.SET_PORTFOLIO,
    portfolioItems,
  };
}