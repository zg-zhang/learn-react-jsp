const defaultState = {
    inputValue: 'write someThing',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === 'change_input_value') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return  newState
    } else if (action.type === 'add_click') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return  newState
    } else if (action.type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}