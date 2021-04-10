import {CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_CLICK, GET_LIST} from "./actionTypes";
import axios from "axios";
import store from "./index";

const url = 'https://mock.getapi.run/mock/b12db-1618020529472-4ce0-f2abd1eb/getList'

export const handleChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const handleClickAction = () => ({
    type: ADD_CLICK
})

export const handleDeleteItemAction = value => ({
    type: DELETE_ITEM,
    value
})

export const handleGetListAction = () => {
    axios.get(url).then(res => {
        const value = res.data.list
        console.log(value)
        const action = {
            type: GET_LIST,
            value
        }
        store.dispatch(action)
    })
}