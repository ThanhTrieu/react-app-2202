import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import loadable from '@loadable/component'
import NotFoundPage from '../pages/errors/404';

const PopularPage  = loadable(() => import('../pages/popular/index'));
const UpComingPage = loadable(() => import('../pages/coming/index'));
const SearchPage   = loadable(() => import('../pages/search/index'));
const DetailPage   = loadable(() => import('../pages/detail/index'));

const RouteMovies = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PopularPage/>} />
                <Route path="/up-coming" element={<UpComingPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/:slug~:id" element={<DetailPage/>}/>
                {/* not found page */}
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default React.memo(RouteMovies);