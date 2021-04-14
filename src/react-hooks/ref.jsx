import React, {useEffect, useRef, useState} from "react";

function Ref() {

    const inputEl = useRef(null)

    const onButtonClick = () => {
        inputEl.current.value = 'hello, world'
        console.log(inputEl)
    }

    const [text, setText] = useState('zeguo')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log(textRef.current)
    })

    return (
        <>
            <br/>
            <input ref={inputEl} type='text'/>
            <button onClick={onButtonClick}>在 input 上展示文字</button>
            <br/>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
        </>
    )
}

export default Ref