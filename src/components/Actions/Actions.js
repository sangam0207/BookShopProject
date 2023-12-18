// actions.js

export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM='DEL_ITEM';
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const delItem = (item) => ({
    type: DEL_ITEM,
    payload: item,
  });
