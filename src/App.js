import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import {Layout} from 'antd';

import Home from "./Page/Home";
import Graph from "./Page/Graph";
import Footer from "./components/Footer";
import MyHeader from "./components/Header";

const {Content} = Layout;


const App = (props) => (
    <Layout>
        <MyHeader/>
        <Content className="site-layout" style={{padding: '0 50px', marginTop: 64,}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 380,}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/graph" element={<Graph/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Content>
        <Footer/>
    </Layout>
);

export default App;
