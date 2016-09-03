
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';

class BigPic extends Component {
  static propTypes = {
    style: PropTypes.string,
    src: PropTypes.string,
  };

  static defaultProps = {

  };

  render() {
    return (
      <div className={style.bigpic}>
        <Row type="flex" justify="center" align="top">
          <Col span={18}>
            <div className={style.image}>
              <img src={this.props.src} alt="3.jpg" />
            </div>
          </Col>
          <Col span={6}>
            <div className={style.details}>
              <Col span={22}>Name: xxx</Col>
              <Col span={22}>Age: xxx</Col>
              <Col span={22}>Hooby: xxx</Col>
              <Col span={22}>Another: xxx</Col>
              <Col span={22}>Another: xxx</Col>
              <Link className={style.btn} to="detail">Know More</Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BigPic;
