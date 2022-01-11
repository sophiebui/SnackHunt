import { csrfFetch } from "./csrf";

const GET_SNACKS = 'snacks/GET_SNACKS';

export const getSnacks = (snacks) => {
  return {
    type: GET_SNACKS,
    snacks
  };
}

export const getAllSnacks = () => async (dispatch) => {
  const response = await csrfFetch('/api/snacks');
  const data = await response.json();
  dispatch(getSnacks(data.snacks));
}

const initialState = { entries: {} }

const snacksReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_SNACKS:
      newState = { ...state };
      newState.entries = action.snacks.reduce((entries, snack) => {
        entries[snack.id] = snack;
        return entries;
      }, {});
      return newState;
    default:
      return state;
  }
}

export default snacksReducer;
