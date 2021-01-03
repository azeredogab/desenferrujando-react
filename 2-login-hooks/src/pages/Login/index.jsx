import React, { useState } from 'react'
import './index.css'
import { signIn } from './../../store/actions/login'
import { connect } from './../../store/index'
import { useHistory } from 'react-router-dom'

function Login({ signIn }) {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const isSignedIn = await signIn({user, password});
        if (isSignedIn) {
            history.push('/home')
        } else {
            alert("Usuário ou senha incorretos.");
            refreshPage();
        }
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="Login">
            <div className="Login_Box">
                <div className="Login_Box_Fields">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="Box_Fields_Field">
                            <label htmlFor="user">Usuário</label>
                            <input type="text" name="user" placeholder="Digite o Usuário" onChange={e => setUser(e.target.value)}/>
                        </div>
                        
                        <div className="Box_Fields_Field">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" placeholder="Digite a Senha" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="Box_Fields_Field">
                            <button>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>      
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (payload) => signIn(dispatch, {user: payload.user, password: payload.password})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)