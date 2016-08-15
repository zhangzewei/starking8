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
            <span className={style.title}>Logo</span>
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
                <Link to="notice">Notice</Link>
              </Menu.Item>
              <SubMenu title={<span>Starking</span>}>
                <MenuItemGroup>
                  <Menu.Item key="setting:1">
                    sssss
                  </Menu.Item>
                  <Menu.Item key="setting:2">选项2</Menu.Item>
                  <Menu.Item key="setting:3">选项3</Menu.Item>
                  <Menu.Item key="setting:4">选项4</Menu.Item>
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
