import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import Xiaojiejie from "./react/Xiaojiejie";
import Redux from './redux'

ReactDOM.render(
  <React.StrictMode>
    {/*<Xiaojiejie />*/}
    <Redux />
  </React.StrictMode>,
  document.getElementById('root')
)
