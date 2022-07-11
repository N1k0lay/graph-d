import React from 'react';
import {Layout, Menu} from "antd";
const {Header} = Layout;


const items = [
    { label: 'Home', key: 'Home' }, // remember to pass the key prop
    { label: 'Graph', key: 'Graph' }, // which is required
    {
        label: 'sub menu',
        key: 'submenu',
        children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
];

const MyHeader = () => {
    return (
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
            }}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
            />
        </Header>
    );
};

export default MyHeader;