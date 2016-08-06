import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';

import * as actions from './actions';

import BigPic from './components/BigPic';
import SmallPic from './components/SmallPic';

function mapStateToProps(state) {
  console.log(state);
  return {
    state: state.pics.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Pics extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  render() {
    const { state } = this.props;
    console.log(state);
    return (
      <div className={style.div}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <BigPic />
          </Col>
          <Col span={8}>
            <SmallPic id={state.id} handleClick={actions.clickImage} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pics;
