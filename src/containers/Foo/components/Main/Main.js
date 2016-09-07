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
                  <img src="../src/images/demo1.png" alt="demo1" />
                </a>
              </div>
              <div>
                <a href="#!">
                  <img src="../src/images/demo2.png" alt="demo2" />
                </a>
              </div>
              <div>
                <a href="#!">
                  <img src="../src/images/demo3.png" alt="demo3" />
                </a>
              </div>
              <div>
                <a href="#!">
                  <img src="../src/images/demo4.png" alt="demo3" />
                </a>
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={4}>
            <Card className={style.card} title="Notice" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className={style.card} title="Starking" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className={style.card} title="Audition" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className={style.card} title="Recruit" extra={<a href="#">More</a>}>
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
