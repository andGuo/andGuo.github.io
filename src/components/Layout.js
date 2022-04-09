import React from 'react'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <NavBar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>andGuo 2022</p>
            </footer>
        </div>
    )
}
