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
