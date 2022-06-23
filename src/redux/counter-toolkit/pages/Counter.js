import React from 'react';
import IncrementCounter from '../components/Increment';
import ResultCounter from '../components/Result';

const CounterToolkit = () => {
    return (
        <>
            <ResultCounter/>
            <IncrementCounter/>
        </>
    )
}
export default React.memo(CounterToolkit);