import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [timeString, setTimeString] = useState(null);

    useEffect(() => {
        let timer = setInterval(() => {
            const now = new Date(); // khoi tao doi tuong date js
            // get hours - minutes - seconds
            const hours   = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTimeString = `${hours} : ${minutes} : ${seconds}`;
            setTimeString(currentTimeString);
        }, 1000);
        // Effect with cleanup
        return () => {
            // componentWillUnMount
            // leak memory
            // console.log('componentWillUnMount');
            clearInterval(timer);
        }
    }, []); // componentDidMount

    return (
        <div style={{ fontSize: '50px' }}>{timeString}</div>
    )
}
export default React.memo(Clock);