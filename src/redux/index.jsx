import React, { useState } from 'react'
import {Button, Input, List} from 'antd'
import store from "./store";

function Redux() {
    const state = store.getState()
    const [data, setData] = useState(state.list)

    return (
        <div>
            <div>
                <Input placeholder='zeguo' style={{ width: '250px', margin: '10px' }} />
                <Button type='primary' >增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}

export default React.memo(Redux)