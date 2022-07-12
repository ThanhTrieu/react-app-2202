import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalItemsCart } from '../../redux/selectors/cart';
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    const countCart = useSelector(getTotalItemsCart);
    let { pathname } = useLocation(); // lay ra duong dan link tren url
    // useLocation : la 1 hooks cua react router
    const items = [
        {label: <Link to="/">Home</Link>, key: '/'},
        {label: <Link to="/cart">Cart ({countCart})</Link>, key: '/cart'},
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