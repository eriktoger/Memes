import {
  SET_NAME,
  SET_OFFICE,
  TOGGLE_NAME_ORDER,
  TOGGLE_OFFICE_ORDER,
} from "../constants/actionTypes";

export type Employee = {
  name: string;
  imagePortraitUrl: string;
  office: string;
};

export type SearchAndSort = {
  name: string;
  nameOrder: number;
  office: string;
  officeOrder: number;
  sortField: "name" | "office";
};

export type SearchAndSortState = {
  name: string;
  setName: (name: string) => void;
  nameOrder: number;
  toggleNameOrder: () => void;
  office: string;
  setOffice: (office: string) => void;
  officeOrder: number;
  toggleOfficeOrder: () => void;
  sortField: "name" | "office";
};

export type ReducerAction =
  | {
      type: typeof SET_NAME;
      payload: string;
    }
  | {
      type: typeof TOGGLE_NAME_ORDER;
    }
  | {
      type: typeof SET_OFFICE;
      payload: string;
    }
  | {
      type: typeof TOGGLE_OFFICE_ORDER;
    };
