import { createContext, useReducer, useContext } from "react";
import { SET_NAME, TOGGLE_NAME_ORDER } from "../constants/actionTypes";
import { SearchAndSortState, SearchAndSort, ReducerAction } from "../types";

const initialSearchAndSort: SearchAndSort = {
  name: "",
  nameOrder: 1,
};

const reducer = (
  state: SearchAndSort,
  action: ReducerAction
): SearchAndSort => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case TOGGLE_NAME_ORDER:
      return { ...state, nameOrder: state.nameOrder * -1 };
  }
};

const useSearchAndSortState = (): SearchAndSortState => {
  const [state, dispatch] = useReducer(reducer, initialSearchAndSort);

  return {
    ...state,
    setName: (name: string) => dispatch({ type: SET_NAME, payload: name }),
    toggleNameOrder: () => dispatch({ type: TOGGLE_NAME_ORDER }),
  };
};

const initialSearchAndSortState: SearchAndSortState = {
  name: "",
  setName: (name: string) => {},
  nameOrder: 1,
  toggleNameOrder: () => {},
};

const SearchAndSortContext = createContext(initialSearchAndSortState);

export const SerchAndSortContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => (
  <SearchAndSortContext.Provider value={useSearchAndSortState()}>
    {children}
  </SearchAndSortContext.Provider>
);

export const useSearchAndSortContext = () => useContext(SearchAndSortContext);
