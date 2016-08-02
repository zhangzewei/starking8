import style from './style.css';

import React, { Component } from 'react';
import { Row, Col, Carousel, Card } from 'antd';

class Main extends Component {
  static propTypes = { };

  static childContextTypes = { };

  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <Col span={15}>
            <Carousel className={style.carousel} effect="fade" autoplay>
              <div>
                <a href="#!">
                  <img src="./src/images/demo1.jpg" alt="demo1" />
                </a>
              </div>
              <div>
                <a href="#!">
                  <img src="./src/images/demo2.jpg" alt="demo2" />
                </a>
              </div>
              <div>
                <a href="#!">
                  <img src="./src/images/demo3.jpg" alt="demo3" />
                </a>
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={4}>
            <Card className={style.card} title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className={style.card} title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className={style.card} title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className={style.card} title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
