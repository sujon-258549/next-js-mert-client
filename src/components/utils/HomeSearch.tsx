const HomeSearch = () => {
  return (
    <div className="flex items-center bg-white px-2 rounded-full">
      <div>
        <div className="mr-2">
          <select
            id="countries"
            className="bg-[#F5F5F5] focus:outline-none rounded-full  text-gray-900 text-sm  block w-full p-[6px] dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
          >
            <option value="Category">Category</option>{" "}
            {/* ✅ No 'selected' here */}
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div>
        <form className="flex items-center max-w-[300px] lg:w-[300px] mx-auto">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-white rounded-r-full  text-gray-900 text-sm rounded-lg  block w-full pr-10 p-2 my-1   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none "
              placeholder="Search branch name..."
            />
          </div>
          <button
            type="submit"
            className="p-2 ms-2 text-sm -ml-7 z-10 font-medium text-white rounded-full bg-gray-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeSearch;
