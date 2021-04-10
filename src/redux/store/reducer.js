import {CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_CLICK, GET_LIST} from "./actionTypes";

const defaultState = {
    inputValue: 'write someThing',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT_VALUE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return  newState
    } else if (action.type === ADD_CLICK) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return  newState
    } else if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    } else if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, ...action.value]
        return newState
    }
    return state
}