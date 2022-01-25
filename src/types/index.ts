import {
  SET_NAME,
  SET_OFFICE,
  TOGGLE_NAME_ORDER,
  TOGGLE_OFFICE_ORDER,
} from "../constants/actionTypes";

export type Meme = {
  name: string;
  url: string;
  id: string;
};

export type SearchAndSort = {
  name: string;
  nameOrder: number;
};

export type SearchAndSortState = {
  name: string;
  setName: (name: string) => void;
  nameOrder: number;
  toggleNameOrder: () => void;
};

export type ReducerAction =
  | {
      type: typeof SET_NAME;
      payload: string;
    }
  | {
      type: typeof TOGGLE_NAME_ORDER;
    };
