import * as React from 'react'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div className="layout min-h-screen bg-gradient-to-br from-secondaryDark to-gray-700 text-primaryDark">
            <NavBar />
            <div className="flex flex-col flex-grow justify-between">
                <div className="content">
                    {children}
                </div>
                <footer className="flex justify-center align-middle content-start">
                    <p className="p-8">andGuo 2022</p>
                </footer>
            </div>
        </div>
    )
}
