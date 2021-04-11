import React from 'react'
import {Button, Input, List} from "antd";

function UI(props) {
    const { inputValue, list, handleChange, handleClick, handleDelete } = props

    return (
        <div>
            <div>
                <Input
                    style={{ width: '250px', margin: '10px' }}
                    value={inputValue}
                    onChange={handleChange}
                />
                <Button
                    type='primary'
                    onClick={handleClick}
                >增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (<List.Item onClick={() => handleDelete(index)}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}

export default React.memo(UI)