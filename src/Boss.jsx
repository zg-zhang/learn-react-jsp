import React, {Component} from 'react'
import './style.css'

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
                <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物：孙悟空</div>
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