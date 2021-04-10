import React, { useState } from 'react'
import {Button, Input, List} from 'antd'
import store from "./store";
import { handleChangeAction, handleClickAction, handleDeleteItemAction } from "./store/actionCreators";

function Redux() {
    const [data, setData] = useState(store.getState())

    function handleChange(e) {
        console.log(e.target.value)
        // 创建 Action
        const action = handleChangeAction(e.target.value)
        store.dispatch(action)
    }

    function handleClick() {
        const action = handleClickAction()
        store.dispatch(action)
    }

    function handleDelete(index) {
        const action = handleDeleteItemAction(index)
        store.dispatch(action)
    }

    function handleStoreChange() {
        setData(store.getState())
    }

    store.subscribe(handleStoreChange)

    return (
        <div>
            <div>
                <Input
                    style={{ width: '250px', margin: '10px' }}
                    value={data.inputValue}
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
                    dataSource={data.list}
                    renderItem={(item, index) => (<List.Item onClick={() => handleDelete(index)}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}

export default React.memo(Redux)