import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import loadable from '@loadable/component';

import NotFoundPage from '../pages/errors/404';

const HomePage  = loadable(() => import('../pages/home/index'));
const CartPage = loadable(() => import('../pages/cart/index'));

const RouteShopping = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/cart" element={<CartPage/>}/>
                {/* not found page */}
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default React.memo(RouteShopping);