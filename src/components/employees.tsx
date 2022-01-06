import { useEffect, useState } from "react";
import { getEmployees } from "../services/employees";
import { Employee } from "../types";
import Card from "./card";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees().then((data) => setEmployees(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5">
      {employees.map((employee) => (
        <Card key={employee.name} employee={employee} />
      ))}
    </div>
  );
};

export default Employees;
