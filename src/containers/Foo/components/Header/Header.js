import style from './style.css';

import React, { Component } from 'react';
import { Row, Col, Menu } from 'antd';
import { Link } from 'react-router';

class Header extends Component {
  static propTypes = {};

  static defaultProps = { };

  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div className={style.header}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <a href="#"><img className={style.title} src="../src/images/logo.jpg" alt="logo" /></a>
          </Col>
          <Col offset={8}>
            <Link className={style.btn} to="login">登录</Link>
            <Link className={style.btn} to="login">注册</Link>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={24}>
            <div className={style.divider}></div>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={18}>
            <Menu mode="horizontal">
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="notice/Notice/1">Notice</Link>
              </Menu.Item>
              <SubMenu title={<span>Starking</span>}>
                <MenuItemGroup>
                  <Menu.Item key="setting:1">
                    <Link to="notice/Starking/About">About</Link>
                  </Menu.Item>
                  <Menu.Item key="setting:2">
                    <Link to="notice/Starking/Recruit">Recruit</Link>
                  </Menu.Item>
                  <Menu.Item key="setting:3">
                    <Link to="customer/1">Customer Center</Link>
                  </Menu.Item>
                  <Menu.Item key="setting:4">
                    <Link to="notice/Starking/Contact">Contact Us</Link>
                  </Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item>
                <Link to="signup">Audition</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="pics">Challenger</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="rank">Rank</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
