import React, { useState } from 'react'
import {Button, Input, List} from 'antd'

function Redux() {
    const [data, setData] = useState([
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ])

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