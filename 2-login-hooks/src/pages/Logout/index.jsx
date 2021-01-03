import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { signOut } from './../../store/actions/login'
import { connect } from './../../store/index'

function Logout({ signOut }) {
    useEffect(() => signOut(), [])
    return <Redirect to="/login" />
}

function mapStateToProps() {}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => signOut(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)