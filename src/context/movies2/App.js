import React from 'react';
import LayoutMovie from './components/Layout';
import ListMovies from './components/List';
import PaginationMovie from './components/Pagination';
import MovieProvider from './provider/MovieProvider';

const AppMovies = () => {
    return (
        <MovieProvider>
            <LayoutMovie>
                <ListMovies />
                <PaginationMovie/>
            </LayoutMovie>
        </MovieProvider>
    )
}
export default AppMovies;