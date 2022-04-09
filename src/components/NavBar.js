import React from 'react'
import { Link } from "gatsby"

export default function NavBar() {
    return (
        <nav>
            <h1>My Site</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/wasmProject">WASM Thing</Link>
            </div>
        </nav>
    )
}