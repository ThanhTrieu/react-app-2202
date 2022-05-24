import React, { useState } from 'react';

// trien khai function component
// hooks chi lam viec voi function component


const TodoApp = () => {
    // khai bao state
    const [count, setCount] = useState(0);
    // count: ten cua state
    // setCount: ham thay doi state / trong fnc ko co setState
    // useState(0) : 0 gia tri mac dinh cua state
    // useState tra ve 1 mang

    const changeCount = (type) => {
        if(type === 1){
            setCount(count + 1); // tang state len 1 gia tri
        } else {
            setCount(count - 1); // giam state xuong 1 gia tri
        }
    }

    return (
        <>
            <h2> {count} </h2>
            <button onClick={()=> changeCount(1)}> + </button>
            <button onClick={()=> changeCount(0)}> - </button>
        </>
    )
}

export default React.memo(TodoApp);