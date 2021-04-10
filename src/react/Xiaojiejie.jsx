import React, {Component, Fragment} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油按摩']
        }
        // console.log('[挂载阶段] 构造函数 constructor')
    }

    // static getDerivedStateFromProps() {
    //     console.log('[挂载更新阶段] static getDerivedStateFromProps')
    //     return null
    // }

    componentDidMount() {
        console.log('[挂载阶段] componentDidMount')
        axios.get('https://mock.getapi.run/mock/b12db-1618020529472-4ce0-f2abd1eb/getData').then(res => {
            console.log(res.data);
            this.setState({
                list: [...this.state.list, res.data.string]
            })
        })
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[更新阶段] shouldComponentUpdate')
    //     return true
    // }
    //
    // static getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[更新阶段] static getSnapshotBeforeUpdate')
    //     return null
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('[更新阶段] componentDidUpdate')
    // }
    //
    // componentWillUnmount() {
    //     conosle.log('[卸载阶段] componentWillUnmount')
    // }

    render() {
        // console.log('[挂载更新阶段] 渲染 render')
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} ref={input => {this.input = input}}/>
                    <button onClick={this.addList.bind(this)}> 增加服务 </button>
                </div>
                <ul ref={ul => { this.ul = ul }}>
                   <TransitionGroup>
                       {
                           this.state.list.map((item, index) => {
                               return (
                                   <CSSTransition
                                       timeout={1000}
                                       classNames='boss-text'
                                       unmountOnExit
                                       appear={true}
                                       key={index+item}
                                   >
                                       <XiaojiejieItem
                                           content={item}
                                           index={index}
                                           handleClick={this.deleteItem.bind(this)}
                                           key={index + item}
                                       />
                                   </CSSTransition>
                               )
                           })
                       }
                   </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        );
    }

    inputChange(e) {
        console.log(this.input.value)
        this.setState({
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    deleteItem(index) {
        console.log(index)
        // 注意 React 中不允许直接改动 state 需要通过 setState 改动
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}

export default Xiaojiejie