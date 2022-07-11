import {Layout, Menu} from "antd";
import React from "react";
const {Sider} = Layout;

const Sidebar = ({items}) => {
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items}/>
        </Sider>
    );
};

export default Sidebar;




