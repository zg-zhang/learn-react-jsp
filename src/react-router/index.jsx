import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./pages";
import List from "./pages/List";
import Home from "./pages/Home";

function ReactRouter() {
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/123'>列表</Link></li>
            </ul>

            <Route path='/' exact><Index /></Route>
            <Route path='/list/:id' exact><List /></Route>
            <Route path='/home' exact><Home /></Route>
        </Router>
    )
}

export default React.memo(ReactRouter)