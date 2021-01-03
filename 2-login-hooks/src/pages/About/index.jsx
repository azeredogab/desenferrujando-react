import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="About">
            <h1>Página sobre o autor</h1>
            <div className="About_Actions">
                <Link to="/home">Voltar para a Dashboard</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )
}

export default About