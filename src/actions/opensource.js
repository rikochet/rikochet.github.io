import * as types from './types';
import { firebase } from '../firestore';

let db = firebase.firestore();

export function getOpenSource() {
  return (dispatch, getState) => {
    db.collection("opensource").get().then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
      });
      dispatch(updateOpenSource(items));
    });
  }
}

export function updateOpenSource(openSourceItems) {
  return {
    type: types.SET_OPENSOURCE,
    openSourceItems,
  };
}