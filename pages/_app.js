import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Index from './index';
import { getProducts } from '../apis/backend';
import cartReducer from '../reducers/cartReducer';

const store = createStore(cartReducer /*, applyMiddleware(...middleware)*/);

class SunglassShop extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Index {...pageProps} />
      </Provider>
    );
  }
}

export default SunglassShop;
