
import style from './style.css';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, Modal, Button } from 'antd';

class Detail extends Component {
  static propTypes = {};

  static defaultProps = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      modalImg: '',
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal(e) {
    console.log(e.target.src);
    this.setState({
      visible: true,
      modalImg: e.target.src,
    });
  }

  handleOk() {
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className={style.detail}>
        <Row type="flex" justify="center" align="top">
          <Col span={16}>
            <Col span={24}>
              <h3 className={style.title}>Details</h3>
              <Col span={8}>
                <div className={style.image}>
                  <img src="../src/images/1.jpg" alt="3.jpg" />
                </div>
              </Col>
              <Col span={16}>
                <div className={style.details}>
                  <ul>
                    <h2>name</h2>
                    <li>
                      <span>身高：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>体重：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>出生日期：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>年龄：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>学历：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>兴趣爱好：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>活动经验：</span>
                      <p></p>
                    </li>
                    <li>
                      <span>自我介绍：</span>
                      <p></p>
                    </li>
                    <Link className={style.btn} to="rank">支持她</Link>
                  </ul>
                </div>
              </Col>
            </Col>
            <Col span={24}>
              <h3 className={style.title}>Pictrues</h3>
              <Col span={24}>
                <Col span={3}>
                  <div className={style.images}>
                    <img onClick={this.showModal} src="../src/images/1.jpg" alt="3.jpg" />
                  </div>
                </Col>
                <Col span={3}>
                  <div className={style.images}>
                    <img onClick={this.showModal} src="../src/images/2.jpg" alt="3.jpg" />
                  </div>
                </Col>
                <Col span={3}>
                  <div className={style.images}>
                    <img onClick={this.showModal} src="../src/images/3.jpg" alt="3.jpg" />
                  </div>
                </Col>
                <Col span={3}>
                  <div className={style.images}>
                    <img onClick={this.showModal} src="../src/images/4.jpg" alt="3.jpg" />
                  </div>
                </Col>
              </Col>
            </Col>
            <Col span={24}>
              <h3 className={style.title}>Videos</h3>
              <Col span={24}>
                <Col span={4}>
                  <Card className={style.card} style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
                    <div className={style.customImage}>
                      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className={style.customCard}>
                      <h3>Europe Street beat</h3>
                      <p>www.instagram.com</p>
                    </div>
                  </Card>
                </Col>
              </Col>
            </Col>
          </Col>
        </Row>
        <Modal
          title={this.state.modalImg}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button
              type="ghost"
              onClick={this.handleCancel}
            >返 回</Button>,
          ]}
        >
          <img className={style.modalImg} src={this.state.modalImg} alt="3.jpg" />
        </Modal>
      </div>
    );
  }
}

export default Detail;
