import * as ActionTypes from "../actions/ActionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.ON_INCREMENT2:
      return state + 1;
    case ActionTypes.ON_DECREMENT2:
      return state - 1;
    default:
      return state;
  }
};