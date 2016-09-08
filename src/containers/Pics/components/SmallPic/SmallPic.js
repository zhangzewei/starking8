
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
    this.changeImageHeight = this.changeImageHeight.bind(this);
  }

  componentDidMount() {
    this.changeImageHeight();
  }

  changeImageHeight() {
    const imagesContainer = document.getElementById('images');
    const imageWidth = document.querySelector('.image').offsetWidth;
    const images = imagesContainer.childNodes;
    for (let i = 0; i < images.length; i++) {
      images[i].style.height = `${imageWidth}px`;
    }
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
          <Col span={20} id="images">
            {images}
          </Col>
        </Row>
      </div>
    );
  }
}

export default SmallPic;
