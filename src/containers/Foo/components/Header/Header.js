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
          <Col span={15} className={style.nav}>
            <Col span={4}>
              <a href="#">
                <img className={style.title} src="../src/images/logo.jpg" alt="logo" />
              </a>
            </Col>
            <Menu mode="horizontal" className={style.menu}>
              <Menu.Item>
                <Link className={style.menu_a} to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={style.menu_a} to="notice/Notice/1">Notice</Link>
              </Menu.Item>
              <SubMenu className={style.menu_a} title={<span>Starking</span>}>
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
                <Link className={style.menu_a} to="signup">Audition</Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={style.menu_a} to="pics">Challenger</Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={style.menu_a} to="rank">Rank</Link>
              </Menu.Item>
            </Menu>
            <div className={style.login}>
              <Link className={style.btn} to="login">登录</Link>
              <Link className={style.btn} to="login">注册</Link>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={24}>
            <div className={style.divider}></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
