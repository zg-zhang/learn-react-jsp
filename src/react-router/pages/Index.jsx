import React from "react";
import {Link} from "react-router-dom";

function Index() {
    const list = [
        {cid:123,title:'技术胖的个人博客-1'},
        {cid:456,title:'技术胖的个人博客-2'},
        {cid:789,title:'技术胖的个人博客-3'},
    ]

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