import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './component/Home'
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar'

const MainRouter = (props) =>  {
        return (
           <Router>
            <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
            <Switch>
                <Route path="/login" 
                component={Login}
                render={(routerProps) => {
                    return <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
                }} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/" component={Home}/>
            </Switch>



           </Router>
        )
    }

export default MainRouter
