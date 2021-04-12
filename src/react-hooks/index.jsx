import React, {useState} from 'react'

function ReactHooks() {
    const [num, setNum] = useState(0)

    return (
        <div>
            <div onClick={() => {setNum(num - 1)}}>-</div>
            <div>{num}</div>
            <div onClick={() => {setNum(num + 1)}}>+</div>
        </div>
    )
}

export default React.memo(ReactHooks)