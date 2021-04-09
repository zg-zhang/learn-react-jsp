import React, {Component} from 'react'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        );
    }

    handleClick() {
        this.props.handleClick(this.props.index)
    }
}

export default XiaojiejieItem