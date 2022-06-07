import React from 'react';
import LayoutMovie from '../../components/Layout';


const PopularMovies = () => {
    return (
        <LayoutMovie>
            <h2> List of popular movies</h2>
        </LayoutMovie>
    )
}
export default React.memo(PopularMovies);