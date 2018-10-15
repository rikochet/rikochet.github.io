import * as types from './types';
import { firebase } from '../firestore';

let db = firebase.firestore();

export function getArticles() {
  return (dispatch, getState) => {
    db.collection("articles").get().then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
      });
      dispatch(updateArticles(items));
    });
  }
}

export function updateArticles(articles) {
  return {
    type: types.SET_ARTICLES,
    articles,
  };
}