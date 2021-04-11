import React from "react";
import { useParams } from 'react-router-dom'

function List() {
    const { id } = useParams()

    const map = {
        123: '技术胖的个人博客-1',
        456: '技术胖的个人博客-2',
        789: '技术胖的个人博客-3'
    }

    return (
        <h2>id: {id}, title: {map[id]}</h2>
    )
}

export default React.memo(List)