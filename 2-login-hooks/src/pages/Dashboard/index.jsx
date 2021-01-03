import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div className="Dashboard">
            <h1>Estamos logados na aplicação!</h1>
            <div className="Dashboard_Actions">
                <Link to="/about">Sobre o Autor</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )
}

export default Dashboard