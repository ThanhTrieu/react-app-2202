import React from 'react';
import DecrementCounter from '../components/Decrement';
import IncrementCounter from '../components/Increment';
import ResultCounter from '../components/Result';

const CounterPage = () => {
    return (
        <>
            <ResultCounter/>
            <DecrementCounter/>
            <IncrementCounter/>
        </>
    )
}
export default React.memo(CounterPage);