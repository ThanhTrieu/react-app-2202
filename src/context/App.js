import React from 'react';
import LayoutComponent from './components/Layout';
import HeaderComponent from './components/partials/Header';
import ContentComponent from './components/partials/Content';
import FooterComponent from './components/partials/Footer';
import MenuHeaderProvider from './provider/MenuHeaderProvider';
import BreadcrumbProvider from './provider/BreadcrumbProvider';

import './app.css';

const AppContext = () => {
    return (
        <LayoutComponent>
            {/* chi co component Header nhan dc data tu provider */}
            <MenuHeaderProvider>
                <HeaderComponent/>
            </MenuHeaderProvider>
            <BreadcrumbProvider>
                <ContentComponent>
                    <p> content </p>
                </ContentComponent>
            </BreadcrumbProvider>
            <FooterComponent/>
        </LayoutComponent>
    )
}
export default React.memo(AppContext);
