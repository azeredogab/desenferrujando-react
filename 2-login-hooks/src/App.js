import { useEffect, useReducer } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import { syncAuthWithStorage } from './store/actions/login'
import { PrivateRoute, LoginRoute } from './containers/CustomRoute'
import { StoreContext, reducerCombined, initialStateCombined } from './store/index'
import logger from 'use-reducer-logger'
import Login from './pages/Login/index'
import Dashboard from './pages/Dashboard/index'
import About from './pages/About/index'
import NotFound from './pages/NotFound/index'
import Logout from './pages/Logout/index'

function App() {
    
    const [state, dispatch] = useReducer(logger(reducerCombined), initialStateCombined)
    
    useEffect(() => {
        syncAuthWithStorage(dispatch)
    }, [])

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            <div className="App">
                <Router>
                    <Switch>
                        <LoginRoute path="/login"><Login /></LoginRoute>
                        <PrivateRoute path="/logout"><Logout /></PrivateRoute>
                        <PrivateRoute path="/home"><Dashboard /></PrivateRoute>
                        <PrivateRoute path="/about"><About /></PrivateRoute>
                        <Redirect from="/" to="/home" />
                        <PrivateRoute><NotFound /></PrivateRoute>
                    </Switch>
                </Router>
            </div>
        </StoreContext.Provider>
    );
}

export default App;
