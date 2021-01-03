import React, { useContext } from 'react'
import combineReducers from 'react-combine-reducers'
import { loginInitialState, loginReducer } from './reducers/login'

const StoreContext = React.createContext()

function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function (props) {
            const { state, dispatch } = useContext(StoreContext)
            const stateToProps = mapStateToProps(state)
            const dispatchToProps = mapDispatchToProps(dispatch)
            const margedProps = {...props, ...stateToProps, ...dispatchToProps}

            return (
                <Component {...margedProps} />
            )
        }
    }
}

const [reducerCombined, initialStateCombined] = combineReducers({
    auth: [loginReducer, loginInitialState],
});

export { StoreContext, connect, reducerCombined, initialStateCombined }