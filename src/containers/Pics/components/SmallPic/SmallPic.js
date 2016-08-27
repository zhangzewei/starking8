
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import Image from './Image';

class SmallPic extends Component {
  static propTypes = {
    style: PropTypes.string,
    id: PropTypes.number,
    handleClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const imgs = {
      images: [
        { src: '../src/images/1.jpg' },
        { src: '../src/images/2.jpg' },
        { src: '../src/images/3.jpg' },
        { src: '../src/images/4.jpg' },
      ],
    };
    const imagesNum = imgs.images.length;
    for (let i = 0; i < 100 - imagesNum; i++) {
      console.log(imgs.images.length);
      imgs.images.push({ src: '' });
    }
    const images = imgs.images.map((image, index) => (
      <Image
        src={image.src}
        key={index}
        id={this.props.id}
        index={index}
        handleClick={this.props.handleClick}
      />
    ));
    return (
      <div className={style.smallpic}>
        <Row type="flex" justify="center" align="top">
          <Col span={24}>
            {images}
          </Col>
        </Row>
      </div>
    );
  }
}

export default SmallPic;
