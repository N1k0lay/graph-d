import React from 'react';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div>
            Home
            <hr/>
            <NavLink to={'/graph'}>Страница с графиком</NavLink>
        </div>
    );
};

export default Home;