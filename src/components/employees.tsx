import { useEffect, useState } from "react";
import { useSearchAndSortContext } from "../context/sortAndSearch";
import { getEmployees } from "../services/employees";
import { Employee } from "../types";
import Card from "./card";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sortedAndFiltered, setSortedAndFiltered] = useState<Employee[]>([]);
  const { name, office, nameOrder, officeOrder, sortField } =
    useSearchAndSortContext();

  useEffect(() => {
    getEmployees().then((data) => setEmployees(data));
  }, []);

  useEffect(() => {
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
  }, [employees, name, office, nameOrder, officeOrder, sortField]);

  return (
    <div className="min-h-screen bg-forrest bg-cover bg-fixed pt-40 md:pt-48 bg-top-12">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {sortedAndFiltered.map((employee) => (
          <Card key={employee.name} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Employees;
