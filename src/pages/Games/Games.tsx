import { Table } from "@/components/Table";
import Page from "@/layouts/Page";
import { useNavigate, useParams } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import { useQuery } from "react-query";

import { GameI } from "@/types";

const columnHelper = createColumnHelper<GameI>();

const columns = [
  columnHelper.accessor("id", {
    cell: ({ row }) => <p>{row.index + 1}</p>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("name", {
    id: "name",
    cell: (info) => info.getValue(),
    header: () => <span>Server Name</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("type", {
    header: () => "Type",
    cell: (info) => info.renderValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("version", {
    header: () => <span>Version</span>,
    footer: (props) => props.column.id,
  }),
];
export const Games = () => {
  const { genre } = useParams();
  const navigate = useNavigate();

  const { isLoading } = useQuery(`games/${genre}`, {
    // queryFn: () => getGames(genre as string),
    refetchOnWindowFocus: true,
    enabled: !!genre,
  });

  const onRowClick = (row: any) => {
    console.log(row);
    navigate(`/games/${genre}/${row.id}`);
  };
  return (
    <Page>
      <Table columns={columns} loading={isLoading} onRowClick={onRowClick} />
    </Page>
  );
};
