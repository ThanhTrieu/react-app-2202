import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slice/counter';
import { getStateCounter } from '../selectors/counter';

const IncrementCounter = () => {
    const count = useSelector(getStateCounter);
   
    const dispatch = useDispatch();

    const clickIncrement = () => {
        dispatch(increment(count));
    }

    return(
        <button type="button" onClick={() => clickIncrement()}> + </button>
    )
}
export default React.memo(IncrementCounter);