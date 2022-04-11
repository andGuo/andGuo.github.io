import * as React from 'react'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div className="layout min-h-screen bg-gradient-to-br from-lightSecondary to-gray-400 text-lightPrimary dark:bg-gradient-to-br dark:from-darkSecondary dark:to-gray-700 dark:text-darkPrimary">
            <NavBar />
            <div className="flex flex-col flex-grow justify-between">
                <div className="content">
                    {children}
                </div>
                <footer className="flex justify-center align-middle content-start">
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -5 1034 1034" version="1.1">
                        <path fill="currentColor" d="M500 177q-115 0 -214 58q-96 57 -153 153q-58 99 -58 214t58 214q57 96 153 153q99 58 214 58t214 -58q96 -57 153 -153q58 -99 58 -214t-58 -214q-57 -96 -153 -153q-99 -58 -214 -58zM496 264h3h1q92 0 171 46q76 45 121 121q46 79 46 171t-46 171q-45 76 -121 121 q-79 46 -171 46t-171 -46q-76 -45 -121 -121q-46 -79 -46 -170.5t45 -170.5q44 -76 120 -121q77 -46 169 -47zM497 363q-56 0 -104.5 24t-82 66.5t-45.5 94.5h114q15 -34 47 -55t71 -21q35 0 65 17.5t47.5 47.5t17.5 65t-17.5 65t-47.5 47.5t-65 17.5q-39 0 -71 -21t-47 -54 h-114q12 52 45.5 94t82 66t104.5 24q64 0 119 -32.5t87 -87t32 -119.5t-32 -119.5t-87 -87t-119 -32.5z" />
                    </svg>
                    <p className="px-1 py-0.5">
                        <span className="text-lightSecondary px-0.5 font-bold">andGuo 2022</span>
                        <span className="font-bold text-lg">|</span>
                        <span className="text-xs px-0.5">Created with
                            <a className="text-lightSecondary hover:text-lightPrimary dark:hover:text-darkPrimary hover:underline px-1" href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>
                        </span>
                    </p>
                </footer>
            </div>
        </div >
    )
}
