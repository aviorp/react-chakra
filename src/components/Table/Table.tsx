import TableActions from "./TableActions";
import { FC, useReducer, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type TableProps = {
  data: any[];
  columns: any[];
  hidePagination?: boolean;
  hideTableActions?: boolean;
  loading?: boolean;
  onRowClick?: (row: any) => void;
};

export const Table: FC<TableProps> = ({
  data,
  columns,
  loading,
  onRowClick
}) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filters, updateFilters] = useReducer(
    (prev: any, next: any) => ({ ...prev, ...next }),
    {
      globalFilter: ""
    }
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter
    },
    debugTable: true,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  return (
    <>
      <TableActions
        filters={filters}
        filtersHandler={updateFilters}
        searchFn={setGlobalFilter}
      />
      <table className="w-full   text-sm text-left text-default-500 dark:text-white">
        <TableHeader context={table} />
        <TableBody context={table} loading={loading} onRowClick={onRowClick} />
        <Pagination context={table} count={data?.length} />
      </table>
    </>
  );
};
