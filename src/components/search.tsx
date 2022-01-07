import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { useSearchAndSortContext } from "../context/sortAndSearch";

const SortButton = ({
  onClick,
  Icon,
}: {
  onClick: () => void;
  Icon: IconType;
}) => (
  <button
    className="bg-slate-400 hover:bg-slate-600 text-white font-bold mr-5 py-2 px-2 border border-gray-700 rounded-md"
    onClick={onClick}
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

const Search = () => {
  const {
    name,
    office,
    nameOrder,
    officeOrder,
    setName,
    setOffice,
    toggleNameOrder,
    toggleOfficeOrder,
  } = useSearchAndSortContext();

  const NameSortIcon = nameOrder === 1 ? FaSortAlphaUp : FaSortAlphaDown;
  const OfficeSortIcon = officeOrder === 1 ? FaSortAlphaUp : FaSortAlphaDown;

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onOfficeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setOffice(event.target.value);

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
          <SortButton onClick={toggleNameOrder} Icon={NameSortIcon} />
          <SortTitle text="Sort office:" />
          <SortButton onClick={toggleOfficeOrder} Icon={OfficeSortIcon} />
        </div>
      </div>
    </div>
  );
};

export default Search;
