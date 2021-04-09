import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    handleClick: PropTypes.func,
    index: PropTypes.number
}

export default XiaojiejieItem