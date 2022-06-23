import React from 'react';
import { useSelector } from 'react-redux';
import { getStateCounter } from '../selectors/counter';

const ResultCounter = () => {
    const count = useSelector(getStateCounter);
    return (
        <h1> {count} </h1>
    )
}
export default React.memo(ResultCounter);