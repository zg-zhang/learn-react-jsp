import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>ZeGuo</h2>
}

function List() {
    return <h2>List</h2>
}

function ReactRouter() {
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list'>列表</Link></li>
            </ul>

            <Route path='/' exact><Index /></Route>
            <Route path='/list' exact><List /></Route>
        </Router>
    )
}

export default React.memo(ReactRouter)