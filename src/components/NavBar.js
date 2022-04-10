import * as React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between content-end">
            <div className="logo h-12 px-4 py-2 text-5xl font-bold">
                <Link className="hover:text-gray-300" to="/">~/</Link>
            </div>
            <div className="hidden sm:flex">
                <ul className="flex menu mt-2.5 p-3 text-xl">
                    <li className="item mx-3 px-1.5 hover:text-secondaryLight"><Link to="/about">About me</Link></li>
                    <li className="item mx-3 px-1.5 hover:text-secondaryLight"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="item mx-3 px-1.5 hover:text-secondaryLight"><Link to="/wasmProject">WASM Thing</Link></li>
                </ul>
            </div>
            <div className="sm:hidden flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-3 px-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </nav>
    )
}