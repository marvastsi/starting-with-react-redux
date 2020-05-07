import * as ActionTypes from "../actions/ActionTypes";

const CounterReducer = (state = { data: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.ON_INCREMENT:
      let valueInc = action.payload.value;
      if (valueInc === undefined) {
        valueInc = 0;
      }
      return Object.assign({}, state, { data: valueInc + 1 });
    case ActionTypes.ON_DECREMENT:
      let valueDesc = action.payload.value;
      if (valueDesc === undefined) {
        valueDesc = 0;
      }
      return Object.assign({}, state, { data: valueDesc - 1 });
    default:
      return state;
  }
};

export default CounterReducer;