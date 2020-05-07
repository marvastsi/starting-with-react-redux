import React from 'react';
import { connect } from 'react-redux';
import SimpleCounterActions from "../actions/SimpleCounterActions";

const SimpleCounter = (props) => {
    const { simpleValue } = props;

    const handleIncrement2 = () => {
        props.onIncrement2();
    };

    const handleDecrement2 = () => {
        props.onDecrement2();
    };

    return (
        <div>
            <h3>Simple Reducer</h3>
            <h4>Clicked: {simpleValue} times</h4>
            <button onClick={() => handleIncrement2()}>Increment</button>
            <button onClick={() => handleDecrement2()}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        simpleValue: state.simpleCounter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement2: () => dispatch(SimpleCounterActions.onIncrement2()),
        onDecrement2: () => dispatch(SimpleCounterActions.onDecrement2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCounter);