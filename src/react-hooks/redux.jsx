import React, {createContext, useContext, useReducer} from "react";

function Redux() {
    const ColorContext = createContext({})

    const UPDATE_COLOR = 'UPDATE_COLOR'

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_COLOR:
                return action.color
            default:
                return state
        }
    }

    const [color, dispatch] = useReducer(reducer, 'blue')

    function ShowArea() {
        const { color } = useContext(ColorContext)

        return <div style={{ color: color }}> 字体颜色为 {color} </div>
    }

    function Buttons() {
        const { dispatch } = useContext(ColorContext)

        return (
            <div>
                <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
                <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
            </div>
        )
    }

    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            <ShowArea />
            <Buttons />
        </ColorContext.Provider>
    )
}

export default Redux