
import style from './style.css';

import React, { Component } from 'react';
import { Row, Col, Tabs, Input, Button } from 'antd';
const TabPane = Tabs.TabPane;

class Login extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <div className={style.notice}>
        <Row type="flex" justify="center" align="middle">
          <Col span={5}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="登录" key="1">
                <Row type="flex" justify="center" align="middle">
                  <Col span={22}>
                    <p className={style.title}>登录</p>
                    <div className={style.fromGroup}>
                      <label htmlFor="count">账号：</label>
                      <div>
                        <Input id="count" type="text" name="count" required />
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <label htmlFor="password">密码：</label>
                      <div>
                        <Input id="password" type="password" name="password" required />
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <Button htmlType="submit" type="primary" >登录</Button>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="注册" key="2">
                <Row type="flex" justify="center" align="middle">
                  <Col span={22}>
                    <p className={style.title}>注册</p>
                    <div className={style.fromGroup}>
                      <label htmlFor="regcnt">账号：</label>
                      <div>
                        <Input id="regcnt" type="text" name="regcnt" required />
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <label htmlFor="regpsd">密码：</label>
                      <div>
                        <Input id="regpsd" type="password" name="regpsd" required />
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <Button id="register" htmlType="submit" type="primary" >注册</Button>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
