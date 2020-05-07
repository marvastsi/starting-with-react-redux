import * as ActionTypes from "./ActionTypes";

const onIncrement2 = () => {
    return {
        type: ActionTypes.ON_INCREMENT2,
        payload: {}
    };
};

const onDecrement2 = () => {
    return {
        type: ActionTypes.ON_DECREMENT2,
        payload: {}
    };
};

export default {
    onIncrement2,
    onDecrement2,
};