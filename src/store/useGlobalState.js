import { useReducer } from "react";
import storage from 'local-storage-fallback'

const isBrowser = () => typeof window !== 'undefined';
const prefersDark = isBrowser() ? window.matchMedia('(prefers-color-scheme: dark)').matches : true;

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            storage.setItem("isDarkMode", !state.isDarkMode);
            return {
                isDarkMode: !state.isDarkMode,
            };
        default:
            return state
    }
};

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isDarkMode: storage.getItem("isDarkMode") ? JSON.parse(storage.getItem("isDarkMode")) : prefersDark,
    });

    return {state, dispatch};
}

export default useGlobalState;