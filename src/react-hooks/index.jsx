import React, {createContext, useReducer, useContext} from 'react'
import {Button} from "antd";
import Redux from "./redux";
import Memo from "./memo";
import Ref from "./ref";
import useWinSize from "./useWinSize";

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

    const size = useWinSize()

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

            <Redux />

            <Memo />

            <Ref />

            <div>页面Size: {size.width} - {size.height}</div>
        </div>
    )
}

export default React.memo(ReactHooks)