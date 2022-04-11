import { useReducer } from "react";

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                isDarkMode: !state.isDarkMode,
            };
        default:
            return state
    }
};

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isDarkMode: prefersDark
    });

    return {state, dispatch};
}

export default useGlobalState;