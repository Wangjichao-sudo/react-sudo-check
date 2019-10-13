import React from 'react';
import { Switch, Route, HashRouter, Router, Redirect, Link } from 'react-router-dom'
import Home from '../pages/Home'
import User from '../pages/User'
import Info from '../pages/Info'
import Hook from '../pages/Hook'
import Users from '../pages/Users'
import Context from '../pages/Context'
import CloneElement from '../pages/CloneElement'
import CreateRef from '../pages/CreateRef'
console.dir(<Link></Link>)
const Routers = () => (
    <HashRouter>
        <Switch>
            <Route path="/login" exact component={User}></Route>
            <Info>
                <Switch>
                    <Route path="/index" exact component={Home}></Route>
                    <Route path="/login" exact component={Home}></Route>
                    <Route path="/user" exact component={User}></Route>
                    <Route path="/hook" exact component={Hook}></Route>
                    {/* <Route path="/info" exact component={Info}></Route> */}
                    <Route path="/context" exact component={Context}></Route>
                    <Route path="/cloneelement" exact component={CloneElement}></Route>
                    <Route path="/createref" exact component={CreateRef}></Route>
                    <Route path="/users/:id" exact component={Users}></Route>
                    <Redirect to="/index" />
                </Switch>        
            </Info>
        </Switch> 
    </HashRouter>
)

export default Routers
