import React from 'react';
import { connect } from 'react-redux';
import CounterActions from "../actions/CounterActions";

const Counter = (props) => {
    const { value } = props;
    const count = value['data'];

    const handleIncrement = () => {
        props.onIncrement(count);
    };

    const handleDecrement = () => {
        props.onDecrement(count);
    };

    return (
        <div>
            <h3>Object Reducer</h3>
            <h4>Clicked: {count} times</h4>
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(CounterActions.onIncrement(value)),
        onDecrement: (value) => dispatch(CounterActions.onDecrement(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);