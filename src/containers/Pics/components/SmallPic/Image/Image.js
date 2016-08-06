
import style from './style.css';

import React, { Component, PropTypes } from 'react';


class Image extends Component {
  static propTypes = {
    style: PropTypes.string,
    src: PropTypes.string.isRequired,
    id: PropTypes.number,
    handleClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  renderImage(info, index) {
    const { handleClick } = this.props;
    if (this.props.id === index) {
      return (
        <div className={style.imageActive} onClick={() => handleClick(index)}>
          <img src={this.props.src} alt={index} title={index} />
        </div>
      );
    }
    return (
      <div className={style.image} onClick={() => handleClick(index)}>
        <img src={this.props.src} alt={index} title={index} />
      </div>
    );
  }

  render() {
    const imageInfo = this.props;
    if (imageInfo.src) {
      return (
        this.renderImage(imageInfo.src, imageInfo.index)
      );
    }
    return (
      <div>
        数据加载中...
      </div>
    );
  }
}

export default Image;
