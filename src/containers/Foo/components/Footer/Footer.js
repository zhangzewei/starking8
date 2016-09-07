import style from './style.css';

import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Footer extends Component {
  static propTypes = { };

  static defaultProps = { };

  render() {
    return (
      <div className={style.footer}>
        <Row type="flex" justify="center" align="top">
          <Col span={17}>
            <div className={style.divider}></div>
            <Row type="flex" justify="left" align="top">
              <Col span={3}>
                <img className={style.logo} src="../src/images/logo.jpg" alt="logo" />
              </Col>
              <Col span={10}>
                <div className={style.footerItem}>
                  <p className={style.tel}>(028) 6500 9311</p>
                </div>
              </Col>
              <Col span={10}>
                <div className={style.footerItem}>
                  <p>Email：hwangjeakan@naver.com</p>
                  <p>Address：成都高新区天府五街中路美年广场 C270-271</p>
                  <p>&copy;2016 韩国斯塔星文化传媒有限公司 StarKing Entertainment corp.,</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
