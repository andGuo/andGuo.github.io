import * as React from 'react'
import { Link } from 'gatsby'
import Context from '../store/context'

export default function NavBar() {

    const { state, dispatch } = React.useContext(Context);
    const [showBtn, setShowBtn] = React.useState(state);

    const makeDark = b => b ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

    React.useEffect(() => {
        makeDark(state.isDarkMode);
        setShowBtn(state.isDarkMode);
    }, [state.isDarkMode]);

    const [openNavMenu, setNavMenuOpen] = React.useState(false);

    return (
        <nav className="flex flex-wrap items-center justify-between content-end pt-3">
            <div className="flex items-center logo h-12 px-6 py-2 text-5xl font-bold">
                <Link className="hover:text-gray-300" to="/">~/</Link>
            </div>
            <div className="flex items-center pr-1.5">
                <ul className="hidden sm:flex mt-2.5 p-3 text-xl items-center justify-evenly">
                    <li className="navBtn"><Link to="/about">About me</Link></li>
                    <li className="navBtn"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="navBtn"><Link to="/wasmProject">WASM Thing</Link></li>
                </ul>
                <div className="sm:hidden">
                    {openNavMenu ? (
                        <div className="mt-2.5 pr-3">
                            <button onClick={() => setNavMenuOpen(false)} type="button" className="select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <div className="mt-2.5 pr-3">
                            <button onClick={() => setNavMenuOpen(true)} type="button" className="select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                <div className="mt-2.5 pr-3">
                    <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })} id="theme-toggle" type="button" className="select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-dark-icon" className={`${!showBtn ? "hidden" : ""} w-7 h-7`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg id="theme-toggle-light-icon" className={`${showBtn ? "hidden" : ""} w-7 h-7`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            {openNavMenu &&
                <div className="sm:hidden basis-full bg-lightPrimary dark:bg-darkPrimary mt-6 mb-4">
                    <ul className="flex text-xl flex-col items-center justify-evenly">
                        <Link to="/about" className="border border-solid border-black w-full"><li className="navBtn py-4 text-lightSecondary dark:text-darkSecondary font-bold">About me</li></Link>
                        <Link to="/portfolio" className="border border-solid border-black w-full"><li className="navBtn py-4 text-lightSecondary dark:text-darkSecondary font-bold">Portfolio</li></Link>
                        <Link to="/wasmProject" className="border border-solid border-black w-full"><li className="navBtn py-4 text-lightSecondary dark:text-darkSecondary font-bold">WASM Thing</li></Link>
                    </ul>
                </div>
            }
        </nav>
    )
}