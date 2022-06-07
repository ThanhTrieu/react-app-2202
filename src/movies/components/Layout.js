import React from 'react';
import HeaderComponent from './partials/Header';
import FooterComponent from './partials/Footer';
import ContentComponent from './partials/Content';
import { Layout } from 'antd';

const LayoutComponent = (props) => {
    return (
        <Layout className="layout">
            <HeaderComponent/>
            <ContentComponent>
                {props.children}
            </ContentComponent>
            <FooterComponent/>
        </Layout>
    )
}
export default React.memo(LayoutComponent);