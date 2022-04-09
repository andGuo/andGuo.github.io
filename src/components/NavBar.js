import * as React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between content-end">
            <div className="logo h-12 px-4 py-1 text-5xl">
                <Link className="hover:text-gray-300" to="/">My Site</Link>
            </div>
            <div>
                <ul className="flex menu mt-2.5 p-3 text-xl ">
                    <li className="item mx-3 px-1.5 hover:text-gray-300"><Link to="/about">About me</Link></li>
                    <li className="item mx-3 px-1.5 hover:text-gray-300"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="item mx-3 px-1.5 hover:text-gray-300"><Link to="/wasmProject">WASM Thing</Link></li>
                </ul>
            </div>
        </nav>
    )
}