import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    let { pathname } = useLocation(); // lay ra duong dan link tren url
    // useLocation : la 1 hooks cua react router
    const items = [
        {label: <Link to="/">Home</Link>, key: '/'},
        {label: <Link to="/cart">Cart (3)</Link>, key: '/cart'},
    ];
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={items}
            />
                
        </Header>
    )
}
export default React.memo(HeaderComponent);