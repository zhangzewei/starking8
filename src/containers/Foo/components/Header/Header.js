import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Row, Col, Button, Menu } from 'antd';

class Header extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

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
            <Button className={style.loginBtns} type="primary" size="large">登录</Button>
            <Button className={style.loginBtns} type="primary" size="large">注册</Button>
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
                Notice
              </Menu.Item>
              <SubMenu title={<span>Starking</span>}>
                <MenuItemGroup>
                  <Menu.Item key="setting:1">选项1</Menu.Item>
                  <Menu.Item key="setting:2">选项2</Menu.Item>
                  <Menu.Item key="setting:3">选项3</Menu.Item>
                  <Menu.Item key="setting:4">选项4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item>
                Audition
              </Menu.Item>
              <Menu.Item>
                Challenger
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
