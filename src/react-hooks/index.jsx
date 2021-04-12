import React, {useEffect, useState} from 'react'

function ReactHooks() {
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log(`useEffect => You clicked ${num} times`)
    })

    return (
        <div>
            <div onClick={() => {setNum(num - 1)}}>-</div>
            <div>{num}</div>
            <div onClick={() => {setNum(num + 1)}}>+</div>
        </div>
    )
}

export default React.memo(ReactHooks)