import React, {Component} from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render() {
        console.log('child-render')
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

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    handleClick: PropTypes.func,
    index: PropTypes.number
}

export default XiaojiejieItem
