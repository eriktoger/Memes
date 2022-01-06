import { Employee } from "../types";

const key = process.env.AUTHKEY ?? "";

const headers: HeadersInit = {
  "Content-Type": "application/json",
  Authorization: key,
};

const options: RequestInit = {
  method: "GET",
  headers,
};

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await fetch("https://api.1337co.de/v3/employees", options);
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
