import React, {Component} from 'react'
import './style.css'
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                >
                    <div>BOSS级人物：孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toToggole.bind(this)}>召唤BOSS</button></div>
            </div>
        )
    }

    toToggole() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Boss