import React, {useMemo, useState} from "react";

function Memo() {
    const [a, setA] = useState('小红待客中')
    const [b, setB] = useState('志玲待客中')

    function ChildComponent({ name, children }) {
        function changeXiaohong(name) {
            console.log('她来了，她来了。小红向我们走来了')
            return name + ', 小红向我们走来了'
        }

        const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
        return (
            <>
                <div>{actionXiaohong}</div>
                <div>{children}</div>
            </>
        )
    }

    return (
        <>
            <ChildComponent name={a}>{b}</ChildComponent>
            <button onClick={() => { setA(new Date().getTime() + '')}}>小红</button>
            <button onClick={() => { setB(new Date().getTime()+',志玲向我们走来了')}}>志玲</button>
        </>
    )
}

export default Memo