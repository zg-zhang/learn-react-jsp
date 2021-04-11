import React from "react";
import { connect } from "react-redux";
import store from "./store";
import UI from "./ui";
import {Button, Input, List} from "antd";

class ReactRedux extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Input
                        style={{ width: '250px', margin: '10px' }}
                        value={this.props.inputValue}
                        onChange={this.props.handleChange}
                    />
                    <Button
                        type='primary'
                        onClick={this.props.handleClick}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => handleDelete(index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange(e) {
            console.log(e.target.value)
            const action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            console.log(111);
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux)

