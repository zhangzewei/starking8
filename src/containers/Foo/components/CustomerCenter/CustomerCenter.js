import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Row, Col, Table } from 'antd';
import { Link } from 'react-router';

class Notice extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

  static childContextTypes = { };

  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '标题',
      dataIndex: 'title',
      render(item) {
        return (
          <Link
            to="customer/1"
          >{item}</Link>
      );
      },
    }, {
      title: '时间',
      dataIndex: 'time',
    }];

    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i + 1,
        title: `BsetQuestionTop${i + 1}`,
        time: `${i}`,
      });
    }
    return (
      <div className={style.notice}>
        <Row type="flex" justify="center" align="middle">
          <Col span={17}>
            <h3>CustomerCenter</h3>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="top">
          <Col span={11}>
            <Row type="flex" justify="center" align="top">
              <div className={style.divider}></div>
              <Col span={20}>
                <h3>
                  CustomerCenter
                </h3>
              </Col>
              <Col span={4}>
                <span>2016-8-5</span>
              </Col>
              <div className={style.divider}></div>
            </Row>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className={style.article}>
                  <article></article>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={5} offset={1}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notice;
