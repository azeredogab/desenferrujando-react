export const loginInitialState = {
    isAuthenticated: false,
    token: null
}

export function loginReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: action.payload.isAuthenticated, token: action.payload.token }            
        case 'LOGOUT':
            return state = {}            
        default:
            return state
    }
}