import React, {createContext, useState, useContext} from 'react'
import {Button} from "antd";

const CountContext = createContext()

function ReactHooks() {
    const [num, setNum] = useState(0)

    function Index(props) {
        return <h2>Index {props.children}</h2>
    }

    function List() {
        const num = useContext(CountContext)
        return <h2>list: {num}</h2>
    }

    return (
        <div>
            <Button onClick={() => {setNum(num + 1)}}> + </Button>
            <div>{num}</div>
            <Button onClick={() => {setNum(num - 1)}}> - </Button>

            <CountContext.Provider value={num}>
                <Index>
                    <List />
                </Index>
            </CountContext.Provider>
        </div>
    )
}

export default React.memo(ReactHooks)