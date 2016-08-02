import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import * as FooActions from 'containers/Foo/actions';
import Header from './components/Header';
import Main from './components/Main';
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
    foo: PropTypes.object.isRequired,
    fooActions: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    foo: PropTypes.object,
    fooActions: PropTypes.object,
  };

  getChildContext() {
    const { foo, fooActions } = this.props;
    return { foo, fooActions };
  }

  render() {
    return (
      <div className={style.main}>
        <Header />
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={Main} />
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Foo;
