import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './../services/login'

function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest} render={() => {
            return isLoggedIn()
                ? children
                : <Redirect to='/login' />
        }} />
    )
}

function LoginRoute({ children, ...rest }) {
    return (
        <Route {...rest} render={() => {
            return isLoggedIn()
                ? <Redirect to='/home' />
                : children
        }} />
    )
}

export { PrivateRoute, LoginRoute }
