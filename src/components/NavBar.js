import * as React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between content-end">
            <div className="logo h-12 px-4 py-2 text-5xl font-bold">
                <Link className="hover:text-gray-300" to="/">~/</Link>
            </div>
            <div className="flex">
                <ul className="flex mt-2.5 p-3 text-xl">
                    <li className="navBtn"><Link to="/about">About me</Link></li>
                    <li className="navBtn"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="navBtn"><Link to="/wasmProject">WASM Thing</Link></li>
                </ul>
            </div>
        </nav>
    )
}