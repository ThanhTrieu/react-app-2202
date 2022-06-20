import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import { useAuth } from '../../hooks/useAuth';

const { Header } = Layout;

const HeaderComponent = () => {
    const { logout, user } = useAuth();
    let { pathname } = useLocation(); // lay ra duong dan link tren url
    // useLocation : la 1 hooks cua react router
    let items = [];
    if(user === null){
        items = [
            {label: <Link to="/">Popular</Link>, key: '/'},
            {label: <Link to="/up-coming">Up coming</Link>, key: '/up-coming'},
            {label: <Link to="/search">Search</Link>, key: '/search'},
            {label: <Link to="/login">Login</Link>, key: '/login'},
        ];
    } else {
        items = [
            {label: <Link to="/">Popular</Link>, key: '/'},
            {label: <Link to="/up-coming">Up coming</Link>, key: '/up-coming'},
            {label: <Link to="/search">Search</Link>, key: '/search'},
            {label: <Button onClick={() => logout()}>Logout</Button>}
        ];
    }
    
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