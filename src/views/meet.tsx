import Header from "../components/header";
import Memes from "../components/memes";
import Search from "../components/search";
import { SerchAndSortContextProvider } from "../context/sortAndSearch";

const Meet = () => (
  <SerchAndSortContextProvider>
    <>
      <div className="fixed w-full bg-gradient-to-r from-slate-100 to-slate-200">
        <Header />
        <Search />
      </div>
      <Memes />
    </>
  </SerchAndSortContextProvider>
);
export default Meet;
