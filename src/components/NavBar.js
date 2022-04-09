import * as React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
    return (
        <nav>
            <ul className="menu">
                <li className="logo"><Link to="/">My Site</Link></li>
                <li className="item"><Link to="/about">About me</Link></li>
                <li className="item"><Link to="/portfolio">Portfolio</Link></li>
                <li className="item"><Link to="/wasmProject">WASM Thing</Link></li>
            </ul>
        </nav>
    )
}