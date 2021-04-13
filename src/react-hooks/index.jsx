import React, {createContext, useReducer, useContext} from 'react'
import {Button} from "antd";

const CountContext = createContext()

function ReactHooks() {
    const [num, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)

    function Index(props) {
        return <h2>Index {props.children}</h2>
    }

    function List() {
        const num = useContext(CountContext)
        return <h2>list: {num}</h2>
    }

    return (
        <div>
            <Button onClick={() => dispatch('add')}> + </Button>
            <div>{num}</div>
            <Button onClick={() => dispatch('sub')}> - </Button>

            <CountContext.Provider value={num}>
                <Index>
                    <List />
                </Index>
            </CountContext.Provider>
        </div>
    )
}

export default React.memo(ReactHooks)