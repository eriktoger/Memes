import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SearchAndSort } from "../types";

const SortButton = ({ sort, Icon }: { sort: () => void; Icon: IconType }) => (
  <button
    className="bg-slate-400 hover:bg-slate-600 text-white font-bold mr-5 py-2 px-2 border border-gray-700 rounded-md"
    onClick={() => sort()}
  >
    <Icon color="black" size="28px" />
  </button>
);

const SearchTitle = ({ text }: { text: string }) => (
  <p className="my-auto w-32">{text}</p>
);
const SortTitle = ({ text }: { text: string }) => (
  <p className={"my-auto w-24"}>{text}</p>
);

const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    className={"border-2 border-gray-300 w-48 rounded-md"}
    value={value}
    onChange={onChange}
  />
);

const Search = ({
  searchAndSort,
  setSearchAndSort,
}: {
  searchAndSort: SearchAndSort;
  setSearchAndSort: React.Dispatch<React.SetStateAction<SearchAndSort>>;
}) => {
  const { name, office, nameOrder, officeOrder } = searchAndSort;
  const NameSortIcon = nameOrder === 1 ? FaSortAlphaUp : FaSortAlphaDown;
  const OfficeSortIcon = officeOrder === 1 ? FaSortAlphaUp : FaSortAlphaDown;

  const onSortName = () =>
    setSearchAndSort((oldValue) => ({
      ...oldValue,
      nameOrder: oldValue.nameOrder * -1,
      sortField: "name",
    }));

  const onSortOffice = () =>
    setSearchAndSort((oldValue) => ({
      ...oldValue,
      officeOrder: oldValue.officeOrder * -1,
      sortField: "office",
    }));

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchAndSort((oldValue) => ({
      ...oldValue,
      name: event.target.value,
    }));

  const onOfficeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchAndSort((oldValue) => ({
      ...oldValue,
      office: event.target.value,
    }));

  return (
    <div className="flex">
      <div className="md:flex m-auto">
        <div>
          <div className="flex m-2">
            <SearchTitle text="Search name:" />
            <SearchInput value={name} onChange={onNameChange} />
          </div>
          <div className="flex m-2">
            <SearchTitle text="Search office:" />
            <SearchInput value={office} onChange={onOfficeChange} />
          </div>
        </div>
        <div className="flex p-4">
          <SortTitle text="Sort name:" />
          <SortButton sort={onSortName} Icon={NameSortIcon} />
          <SortTitle text="Sort office:" />
          <SortButton sort={onSortOffice} Icon={OfficeSortIcon} />
        </div>
      </div>
    </div>
  );
};

export default Search;
