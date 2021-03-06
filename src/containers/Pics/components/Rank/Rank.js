import style from './style.css';

import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

class Rank extends Component {
  static propTypes = { };

  static childContextTypes = { };

  render() {
    const columns = [
      {
        title: 'Rank',
        dataIndex: 'key',
      },
      {
        title: 'Image',
        dataIndex: 'src',
        render(src) {
          return <img className={style.header} src={src} alt="2" />;
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        render(text) {
          return <a href="#">{text}</a>;
        },
      },
      {
        title: 'Votes',
        dataIndex: 'votes',
      }];

    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i + 1,
        src: '../src/images/1.jpg',
        name: `李大嘴${i}`,
        votes: 32,
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
        <Row type="flex" justify="center" align="top">
          <Col span={17}>
            <Table columns={columns} dataSource={data} pagination={pagination} size="small" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rank;
