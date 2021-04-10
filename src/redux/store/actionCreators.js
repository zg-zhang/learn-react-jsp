import {CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_CLICK, GET_LIST} from "./actionTypes";

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

export const handleGetListAction = value => ({
    type: GET_LIST,
    value
})