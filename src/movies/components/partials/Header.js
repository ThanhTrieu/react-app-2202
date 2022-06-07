import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    let { pathname } = useLocation(); // lay ra duong dan link tren url
    // useLocation : la 1 hooks cua react router
    const items = [
        {label: <Link to="/">Popular</Link>, key: '/'},
        {label: <Link to="/up-coming">Up coming</Link>, key: '/up-coming'},
        {label: <Link to="/search">Search</Link>, key: '/search'}
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