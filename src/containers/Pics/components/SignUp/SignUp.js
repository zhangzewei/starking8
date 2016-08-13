
import style from './style.css';

import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

class SignUp extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {};

  render() {
    return (
      <div className={style.notice}>
        <Row type="flex" justify="center" align="top">
          <Col span={17}>
            <h3 className={style.title}>报名</h3>
            <Col span={8}>
              <form id="signup" className={style.signup}>
                <div className={style.fromGroup}>
                  <label htmlFor="name">姓名：</label>
                  <div>
                    <input id="name" type="text" name="name" required />
                  </div>
                </div>
                <div className={style.fromGroup}>
                  <div>
                    <label htmlFor="male">男</label>
                    <input id="male" type="radio" name="gender" value="male" required />
                  </div>
                  <div>
                    <label htmlFor="female">女</label>
                    <input id="female" type="radio" name="gender" value="female" required />
                  </div>
                </div>
                <div className={style.fromGroup}>
                  <label htmlFor="email">邮箱：</label>
                  <div>
                    <input id="email" type="email" name="email" required />
                  </div>
                </div>
                <div className={style.fromGroup}>
                  <label htmlFor="tel">手机：</label>
                  <div>
                    <input id="tel" type="tel" name="tel" required />
                  </div>
                </div>
                <div className={style.fromGroup}>
                  <label htmlFor="file">上传文件</label>
                  <div>
                    <input id="file" type="file" name="file" />
                  </div>
                </div>
                <div className={style.fromGroup}>
                  <Button htmlType="submit" type="primary" >报名</Button>
                </div>
              </form>
            </Col>
            <Col span={9}>
              <div className={style.msg}>
                <h4>接受测试详情</h4>
                <div className="divider"></div>
                <h5>(接受测试者请先填写申请书，并在公司指定时间参加测试)</h5>
                <h5>参加对象</h5>
                <p>
                  12 - 25岁 以下的未婚女生
                  舞蹈，声乐，Rap(说唱)，表演， 模特 有梦想有,决心成为优秀的女子团队组合的成员
                </p>
                <h5>支持部门</h5>
                <p>舞蹈，声乐，Rap(说唱)，表演，模特</p>
                <h5>参加费用</h5>
                <p>无（免费）</p>
                <h5>接收申请方法</h5>
                <p>直接在申请书填写姓名，联系方式，以及相关信息</p>
                <h5>选秀日期</h5>
                <p>每周 星期六</p>
                <h5>支持部门 介绍</h5>
                <p>
                  <ol>
                    <li>声乐&Rap(说唱) 部门 – 无伴奏，本人的声音测试。 英语歌 或 韩国歌 1歌，中国歌 1歌。</li>
                    <li>舞蹈 部门 – 本人准备的音乐（1次），主办方准备的音乐（1次）自由式舞蹈。</li>
                    <li>表演 部门 – 即兴表演。</li>
                    <li>模特 部门 – 时尚职场及自由造型（cf.自由造型 或 表情演技准备）。</li>
                    <li>作曲/作词 – 原创作品展示。</li>
                  </ol>
                </p>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
