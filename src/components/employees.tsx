import { useEffect, useState } from "react";
import { getEmployees } from "../services/employees";
import { Employee, SearchAndSort } from "../types";
import Card from "./card";

const Employees = ({ searchAndSort }: { searchAndSort: SearchAndSort }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sortedAndFiltered, setSortedAndFiltered] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees().then((data) => setEmployees(data));
  }, []);

  useEffect(() => {
    const { name, office, nameOrder, officeOrder, sortField } = searchAndSort;
    const filteredEmployees = employees
      .filter((employee) =>
        employee.name.toLowerCase().includes(name.toLowerCase())
      )
      .filter((employee) =>
        employee.office.toLowerCase().includes(office.toLowerCase())
      );
    const sorted = filteredEmployees.sort((a, b) => {
      const sortOrder = sortField === "name" ? nameOrder : officeOrder;

      return a[sortField].localeCompare(b[sortField], "sv") * sortOrder;
    });

    setSortedAndFiltered(sorted);
  }, [employees, searchAndSort]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-5">
      {sortedAndFiltered.map((employee) => (
        <Card key={employee.name} employee={employee} />
      ))}
    </div>
  );
};

export default Employees;
