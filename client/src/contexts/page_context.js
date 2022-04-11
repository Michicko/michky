import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/page_reducer";

const initialState = {
	is_page_loading: false,
	is_nav_menu_opened: false,
};

const PageContext = createContext();

export const PageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PageContext.Provider value={{ ...state }}>{children}</PageContext.Provider>
	);
};

export const usePageContext = () => {
	return useContext(PageContext);
};
