import { login, logout } from './../../services/login'
import { getLocalStorage } from './../../services/util'

async function signIn(dispatch, payload) {
    const { user, password } = payload; 
    if (!user || !password) return false

    const token = await login(user, password);

    if (!token) {
        return false;
    }

    dispatch({ type: 'LOGIN', payload: {
        isAuthenticated: token ? true : false,
        token
    }})
    return true;
}

function syncAuthWithStorage(dispatch) {
    let token = getLocalStorage('token')
    if (token) {
        dispatch({ type: 'LOGIN', payload: {
            isAuthenticated: token ? true : false,
            token
        }})
    }
}

function signOut(dispatch) {
    logout(); 
    dispatch({ type: 'LOGOUT' })
}

export { signIn, signOut,  syncAuthWithStorage } 