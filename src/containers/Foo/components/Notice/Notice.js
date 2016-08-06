import style from './style.css';

import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

class Notice extends Component {
  static propTypes = { };

  static childContextTypes = { };

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      render(text) {
        return <a href="#">{text}</a>;
      },
    }, {
      title: '年龄',
      dataIndex: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
    }];

    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `李大嘴${i}`,
        age: 32,
        address: `西湖区湖底公园${i}号`,
      });
    }

    const pagination = {
      total: data.length,
      showSizeChanger: false,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    };

    return (
      <div className={style.notice}>
        <Row type="flex" justify="center" align="middle">
          <Col span={17}>
            <h3>Notice</h3>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="top">
          <Col span={11}>
            <Row type="flex" justify="center" align="top">
              <div className={style.divider}></div>
              <Col span={20}>
                <h3>Notice Title</h3>
              </Col>
              <Col span={4}>
                <span>2016-8-5</span>
              </Col>
              <div className={style.divider}></div>
            </Row>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className={style.article}>
                  132132132132132132131
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={5} offset={1}>
            <Table columns={columns} dataSource={data} pagination={pagination} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notice;
