import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PopularPage from '../pages/popular/index';
import UpComingPage from '../pages/coming/index';
import SearchPage from '../pages/search/index';

const RouteMovies = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PopularPage/>} />
                <Route path="/up-coming" element={<UpComingPage/>} />
                <Route path="/search" element={<SearchPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default React.memo(RouteMovies);