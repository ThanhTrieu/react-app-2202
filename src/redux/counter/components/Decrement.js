import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { connect } from 'react-redux';
import { decrementCounter } from '../actions/index';

const DecrementCounter = () => {
    // lay state
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch(); // dispatch actions vao store

    const dispatchDecrementCounter = () => {
        dispatch(decrementCounter(count));
    }

    return (
        <button type="button" onClick={() => dispatchDecrementCounter()}> - </button>
    )
}

// const mapStateToProps = (state) => ({
//     count: state.counter.count
// });
// const mapDispatchToProps = dispatch => ({
//     clkDe: val => dispatch(decrementCounter(val))
// });
//const ConnectDecrementCounter = connect(mapStateToProps, mapDispatchToProps);
export default React.memo(DecrementCounter);