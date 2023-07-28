import votes from "@/api/votes";
import Page from "@/layouts/Page";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Slot } from "./Slot";
import { EmptyPage } from "./EmptyPage";

import { UpdateVote } from "./UpdateVote";
import { SlotI } from "@/types";

export const Dashboard = () => {
  const queryClient = useQueryClient();
  const refreshVotes = () => queryClient.invalidateQueries("lastVotes");
  const {
    data,
    isLoading,
    isFetched,
    error: dataError,
  } = useQuery({
    queryKey: "lastVotes",
    queryFn: () => votes.getAll(),
  });

  const {
    mutate: updateVote,
    isLoading: isUpdating,
    isSuccess,
    error: updateError,
  } = useMutation({
    mutationFn: ({ id, payload }: any): Promise<any> => {
      return votes.update<any>(id, payload);
    },
    onSuccess: () => {
      refreshVotes();
    },
  });

  return (
    <Page
      loading={isLoading}
      success={isSuccess}
      error={(dataError as string) || (updateError as string)}
    >
      {isFetched && !data.length ? (
        <EmptyPage />
      ) : (
        <main className="px-6 py-4">
          <div id="last-incomes">
            <h1 className="font-bold py-4 uppercase text-default-950 dark:text-white">
              Your Latest Votes
            </h1>
            <div
              id="stats"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p"
            >
              {data!.map((slot: SlotI) => (
                <Slot key={slot.id} slot={slot} />
              ))}
            </div>
          </div>
        </main>
      )}
    </Page>
  );
};
