import axios from 'axios'
import { saveLocalStorage, getLocalStorage } from './util'

const USER_API = 'https://reqres.in/api/login'; 

async function login(user, password) {
    try {
        const { data } = await axios.post(USER_API, {
            email: user, 
            password
        })
        
        saveLocalStorage('token', data.token); 
        return data.token
    } catch(err) {
        saveLocalStorage('token', '')
        return false
    }
}

function isLoggedIn() {
    let token = getLocalStorage('token'); 
    return token ? true : false;
}

function logout() {
    saveLocalStorage('token', ''); 
}

export { login, isLoggedIn, logout }