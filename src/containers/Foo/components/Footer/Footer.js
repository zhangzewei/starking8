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
          </Col>
        </Row>
        <Row type="flex" justify="center" align="top">
          <Col span={7}>
            <div className={style.footerItem}>
              <p>&copy;2016 成都斯塔星教育文化有限公司 StarKing Entertainment.</p>
            </div>
          </Col>
          <Col span={7}>
            <div className={style.footerItem}>
              <p>Email：hwangjeakan@naver.com</p>
              <p>Wechat：hwangjeakan</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
