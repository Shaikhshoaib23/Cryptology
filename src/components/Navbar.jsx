import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crpt.png';


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState(undefined);


    useEffect(() => {
        const handleResize = () => {setscreenSize(window.innerWidth);
        
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    }, [screenSize])

     return(
        <div className="nav-container">
        <div className="logo-container">
          <Avatar size="large" shape='square' src={icon} style={{ height: '90px', width: '100px' }}/>
          <Typography.Title italic='true'strong="true" level={2} className="logo"><Link to="/">Cryptology</Link></Typography.Title>
          <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
        </div>
        {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
        )}
      </div>
    );
  };

     export default Navbar