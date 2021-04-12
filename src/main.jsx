import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import Xiaojiejie from "./react/Xiaojiejie";
import Redux from './redux'
import ReactRedux from "./react-redux";
import { Provider } from "react-redux";
import store from "./react-redux/store";
import ReactRouter from "./react-router";
import ReactHooks from "./react-hooks";

ReactDOM.render(
  // <Provider store={store}>
  //   {/*<Xiaojiejie />*/}
  //   {/*<Redux />*/}
  //   {/*<ReactRedux />*/}
  // </Provider>,
  //   <ReactRouter />,
    <ReactHooks />,
    document.getElementById('root')
)
