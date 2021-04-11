import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

function Index(props) {
    const list = [
        {cid:123,title:'技术胖的个人博客-1'},
        {cid:456,title:'技术胖的个人博客-2'},
        {cid:789,title:'技术胖的个人博客-3'},
    ]

    const history = useHistory()

    useEffect(() => {
        history.push('/home')
    }, [])

    return (
        <ul>
            {list.map((item, index) => {
                return <li key={index}>
                    <Link to={`/list/${item.cid}`}>{item.title}</Link>
                </li>
            })}
        </ul>
    )
}

export default React.memo(Index)