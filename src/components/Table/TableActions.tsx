import { FC } from "react";

type TableActionsProps = {
  filters?: object;
  filtersHandler?: (filters: object) => void;
  searchFn: (search: string) => void;
};

const TableActions: FC<TableActionsProps> = ({ searchFn }) => {
  return (
    <div className=" mx-auto w-full ">
      <div className="relative bg-white shadow-md dark:bg-black ">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-default-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-default-900 dark:text-default-500 border border-default-300 rounded-lg bg-default-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-default-600 dark:placeholder-default-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                onChange={e => searchFn(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-default-900 bg-white border border-default-200 rounded-lg md:w-auto focus:outline-none hover:bg-default-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-default-200 dark:focus:ring-default-700 dark:bg-white  dark:border-white dark:hover:text-white dark:hover:bg-gray-800">
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add product
            </button>
            <div className="flex items-center w-full space-x-3 md:w-auto">
              <button
                id="actionsDropdownButton"
                data-dropdown-toggle="actionsDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-default-900 bg-white border border-default-200 rounded-lg md:w-auto focus:outline-none hover:bg-default-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-default-200 dark:focus:ring-default-700  dark:bg-white   dark:hover:text-white dark:hover:bg-gray-800"
                type="button">
                <svg
                  className="-ml-1 mr-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
                Actions
              </button>

              <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-default-900 bg-white border border-default-200 rounded-lg md:w-auto focus:outline-none hover:bg-default-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-default-200 dark:focus:ring-default-700  dark:bg-white   dark:hover:text-white dark:hover:bg-gray-800"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-default-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                Filter
                <svg
                  className="-mr-1 ml-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableActions;
