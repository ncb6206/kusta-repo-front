import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => (
  <div className="flex w-full max-w-md justify-center md:max-w-2xl xl:max-w-3xl">
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-opacity-80 w-full rounded-full bg-white px-6 py-4 text-lg shadow focus:outline-none"
      />
      <span className="text-gray2 absolute top-1/2 right-5 -translate-y-1/2">
        <IoSearchOutline className="text-main cursor-pointer text-2xl" />
      </span>
    </div>
  </div>
);

export default SearchBar;
