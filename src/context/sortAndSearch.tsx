import { createContext, useReducer, useContext } from "react";
import {
  SET_NAME,
  SET_OFFICE,
  TOGGLE_NAME_ORDER,
  TOGGLE_OFFICE_ORDER,
} from "../constants/actionTypes";
import { SearchAndSortState, SearchAndSort, ReducerAction } from "../types";

const initialSearchAndSort: SearchAndSort = {
  name: "",
  office: "",
  nameOrder: 1,
  officeOrder: 1,
  sortField: "name",
};

const reducer = (
  state: SearchAndSort,
  action: ReducerAction
): SearchAndSort => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case TOGGLE_NAME_ORDER:
      return { ...state, nameOrder: state.nameOrder * -1, sortField: "name" };
    case SET_OFFICE:
      return { ...state, office: action.payload };
    case TOGGLE_OFFICE_ORDER:
      return {
        ...state,
        officeOrder: state.officeOrder * -1,
        sortField: "office",
      };
  }
};

const useSearchAndSortState = (): SearchAndSortState => {
  const [state, dispatch] = useReducer(reducer, initialSearchAndSort);

  return {
    ...state,
    setName: (name: string) => dispatch({ type: SET_NAME, payload: name }),
    toggleNameOrder: () => dispatch({ type: TOGGLE_NAME_ORDER }),
    setOffice: (office: string) =>
      dispatch({ type: SET_OFFICE, payload: office }),
    toggleOfficeOrder: () => dispatch({ type: TOGGLE_OFFICE_ORDER }),
  };
};

const initialSearchAndSortState: SearchAndSortState = {
  name: "",
  setName: (name: string) => {},
  office: "",
  setOffice: (office: string) => {},
  nameOrder: 1,
  toggleNameOrder: () => {},
  officeOrder: 1,
  toggleOfficeOrder: () => {},
  sortField: "name",
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
