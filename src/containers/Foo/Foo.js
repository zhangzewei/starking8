import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FooActions from 'containers/Foo/actions';

import Header from './components/Header';
import Footer from './components/Footer';

function mapStateToProps(state) {
  const { foo } = state;
  return { foo };
}

function mapDispatchToProps(dispatch) {
  return {
    fooActions: bindActionCreators(FooActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Foo extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <div className={style.main}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Foo;
