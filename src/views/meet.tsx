import { useState } from "react";
import Header from "../components/header";
import Employees from "../components/employees";
import Search from "../components/search";
import { SerchAndSortContextProvider } from "../context/sortAndSearch";

const Meet = () => {
  return (
    <SerchAndSortContextProvider>
      <>
        <div className="fixed w-full bg-gradient-to-r from-slate-100 to-slate-200">
          <Header />
          <Search />
        </div>
        <Employees />
      </>
    </SerchAndSortContextProvider>
  );
};

export default Meet;
