import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router";
import { Provider } from "react-redux"
import store from "./store"
import { SET_USER,REACT_REDUX_LOCAL } from "./constants"

/**
 * 判断本地登陆状态
 */
if(localStorage.getItem(REACT_REDUX_LOCAL)){
  /**
   * 触发一个actions
   */
  store.dispatch({
    type:SET_USER,
    user:JSON.parse(localStorage.getItem(REACT_REDUX_LOCAL))
  })
}

ReactDOM.render(
  <Provider store={ store }>
     <AppRouter />
  </Provider>,
  document.getElementById('root')
);
