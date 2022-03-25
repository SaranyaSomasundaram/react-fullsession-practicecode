import React from "react";

import "./Header.css";
// import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import img from './img.jpg';

const Design = () => {
    return (
        <div id="header">
            <div id="companyname">
                <p >Company Name</p>
            </div>
            <div id="searchbar">
                <p id="searach-text">search</p>
                <div id="search"><SearchOutlined /></div>
            </div>

            <img src={img} id="icon-image" />
            <div id="count">
                <p>11</p>
            </div>

        </div>

    );

};
export default Design