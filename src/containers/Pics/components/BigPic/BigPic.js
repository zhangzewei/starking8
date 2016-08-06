
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Row, Col, Button } from 'antd';

class BigPic extends Component {
  static propTypes = {
    style: PropTypes.string,
  };

  static defaultProps = {

  };

  render() {
    return (
      <div className={style.bigpic}>
        <Row type="flex" justify="center" align="top">
          <Col span={10}>
            <div className={style.image}>
              <img src="./src/images/3.jpg" alt="3.jpg" />
            </div>
          </Col>
          <Col span={14}>
            <div className={style.details}>
              <Col span={22}>Name: xxx</Col>
              <Col span={22}>Age: xxx</Col>
              <Col span={22}>Hooby: xxx</Col>
              <Col span={22}>Another: xxx</Col>
              <Col span={22}>Another: xxx</Col>
              <Col className={style.btn} span={22}>
                <Button type="primary" size="large">Know More</Button>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BigPic;
