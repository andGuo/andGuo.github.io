import * as React from 'react'
import { Link } from 'gatsby'
import Context from '../store/context'

export default function NavBar() {

    const {state, dispatch} = React.useContext(Context);
    const [showBtn, setShowBtn] = React.useState(state);

    const makeDark = b => b ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

    React.useEffect(() => {
        makeDark(state.isDarkMode);
        setShowBtn(state.isDarkMode);
    }, [state.isDarkMode]);

    return (
        <nav className="flex items-center justify-between content-end">
            <div className="flex items-center logo h-12 px-4 py-2 text-5xl font-bold">
                <Link className="hover:text-gray-300" to="/">~/</Link>
            </div>
            <div className="pr-1.5">
                <ul className="flex mt-2.5 p-3 text-xl items-center justify-evenly">
                    <li className="navBtn"><Link to="/about">About me</Link></li>
                    <li className="navBtn"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="navBtn"><Link to="/wasmProject">WASM Thing</Link></li>
                    <button onClick={() => dispatch({type: "TOGGLE_DARK_MODE"})} id="theme-toggle" type="button" className="select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-dark-icon" className={`${!showBtn ? "hidden" : "" } w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg id="theme-toggle-light-icon" className={`${showBtn ? "hidden" : "" } w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </ul>
            </div>

        </nav>
    )
}