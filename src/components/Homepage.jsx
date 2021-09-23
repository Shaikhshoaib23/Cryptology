import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const Homepage = () => 
     (
       <>
            <Title level ={3} className ="heading">Global Crypto Stats</Title>
            <Row>
                 <Col span = {11}><Statistic title = "Total Crypto Currencies" value = "4"/></Col>
                 <Col span = {11}><Statistic title = "Total Exchanges" value = "4"/></Col>
                 <Col span = {11}><Statistic title = "Total Market Cap" value = "4"/></Col>
                 <Col span = {11}><Statistic title = "Total 24h Volume" value = "4"/></Col>
                 <Col span = {11}><Statistic title = "Total Markets" value = "4"/></Col>
            </Row>
       </>
    )

    export default Homepage

