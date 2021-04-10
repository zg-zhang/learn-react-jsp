import React, { useState, useEffect } from 'react'
import store from "./store";
import {
    handleChangeAction,
    handleClickAction,
    handleDeleteItemAction,
    handleGetListAction
} from "./store/actionCreators";
import UI from "./ui";
import axios from "axios";

const url = 'https://mock.getapi.run/mock/b12db-1618020529472-4ce0-f2abd1eb/getList'

function Redux() {
    const [data, setData] = useState(store.getState())

    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res.data)
            const action = handleGetListAction(res.data.list)
            store.dispatch(action)
        })
    }, [])

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
        <UI
            data={data}
            handleChange={handleChange}
            handleClick={handleClick}
            handleDelete={handleDelete}
        />
    )
}

export default React.memo(Redux)