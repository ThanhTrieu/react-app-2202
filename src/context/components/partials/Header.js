import React from 'react';
import { Layout, Menu } from 'antd';
import GlobalContext from '../../global/context';

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <GlobalContext.Consumer>
            {menu => (
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={menu.map((item, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: item.name,
                            };
                        })}
                    />
                </Header>
            )}
        </GlobalContext.Consumer>
        
    )
}
export default React.memo(HeaderComponent);