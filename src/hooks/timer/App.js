import React, { useState } from 'react';
import TimerClock from './components/Time';

const AppClock = () => {
    const [showTime, setShowTime] = useState(true);

    const removeTime = () => {
        setShowTime(false);
    }
    return (
        <>
            { showTime && <TimerClock/> }
            <button onClick={() => removeTime()}> Xoa thoi gian</button>
        </>
    )
}
export default AppClock;