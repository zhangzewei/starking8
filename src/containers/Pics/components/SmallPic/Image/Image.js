import React, { Component, PropTypes } from 'react';


class Image extends Component {
  static propTypes = {
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
        <div className="image imageActive" onClick={() => handleClick(index, this.props.src)}>
          <img src={this.props.src} alt={index} title={index} />
        </div>
      );
    }
    return (
      <div className="image" onClick={() => handleClick(index, this.props.src)}>
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
      <div className="image">
        {imageInfo.index + 1}
      </div>
    );
  }
}

export default Image;
