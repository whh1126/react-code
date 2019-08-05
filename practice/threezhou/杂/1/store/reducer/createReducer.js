import {SEARCH,CREATEINIT} from '../action.type'
const defaultState = {
  list: [],
  value: ""
};
const createReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATEINIT:
      return {
        ...state,
        list: action.value
      };
    case SEARCH:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
export default createReducer;
