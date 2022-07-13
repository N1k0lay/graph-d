import React from 'react';
import {NavLink} from "react-router-dom";
import MultilineChart from "../components/MultilineChart";
import schc from "./../data/SCHC.json";
import vcit from "./../data/VCIT.json";
import portfolio from "./../data/portfolio.json";

const Home = () => {

    const portfolioData = {
        name: "Portfolio",
        color: "#000000",
        items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
    };
    const schcData = {
        name: "SCHC",
        color: "#d53e4f",
        items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
    };
    const vcitData = {
        name: "VCIT",
        color: "#5e4fa2",
        items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
    };

    const dimensions = {
        width: 600,
        height: 300,
        margin: {
            top: 30,
            right: 30,
            bottom: 30,
            left: 60
        }
    };

    return (
        <div>
            Home
            <hr/>
            <NavLink to={'/graph'}>Страница с графиком</NavLink>

            <MultilineChart
                data={[portfolioData, schcData, vcitData]}
                dimensions={dimensions}
            />
        </div>
    );
};

export default Home;