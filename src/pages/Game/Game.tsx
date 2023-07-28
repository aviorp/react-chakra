import { useQuery, useMutation } from "react-query";

import { useMemo, useState, useEffect } from "react";
import { useArray, useToggle } from "@/hooks";
import { useUser } from "@clerk/clerk-react";
import Page from "@/layouts/Page";
import games from "@/api/games";
import votes from "@/api/votes";
import users from "@/api/users";

import { BASE_SLOTS_FORM } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { AxiosResponseSchema } from "@/types";

export const Game = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const {
    array: slots,
    set: setSlots,
    push,
    remove,
  } = useArray(BASE_SLOTS_FORM);
  const [subscription_id, setSubscriptionId] = useState("");

  const { value: isDedicatedIp, toggle: toggleDedicatedIp } = useToggle(false);

  const { data } = useQuery({
    queryKey: "lastVotes",
    queryFn: () => votes.getAll<AxiosResponseSchema>(),
  });

  useEffect(() => {
    if (data.length > 0) {
      navigate("/dashboard");
    }
  }, [data]);

  const { data: game, isLoading } = useQuery({
    queryKey: ["game", "102038"],
    queryFn: () => games.getOne("102038"),
    refetchOnWindowFocus: true,
  });
  const {
    mutate: createSubscription,
    isLoading: isSubScriptionMutating,
    error: createSubscriptionError,
  } = useMutation((data) => users.create(data), {
    onSettled: () => navigate("/dashboard"),
  });

  const slotsMemo = useMemo(() => {
    return slots.map(({ username }) => ({
      username,
      game_id: game?.id,
      user_id: user?.id,
    }));
  }, [slots, game?.id, user?.id]);

  const handleSlots = (value: string, index: number) => {
    const xSlots = structuredClone(slots);
    xSlots[index].username = value;
    setSlots(xSlots);
  };

  const chargeAmount = useMemo(() => {
    if (isDedicatedIp) {
      return slots.length * 2 + 4;
    }
    return slots.length * 2;
  }, [slots, isDedicatedIp]);

  const isDisabled = useMemo(() => {
    return !slots.every((slot) => slot.username.length > 2);
  }, [slots]);

  useEffect(() => {
    if (!subscription_id) return;
    // @ts-ignore
    createSubscription({
      subscription_id,
      slots: slotsMemo,
      id: user?.id,
    });
  }, [subscription_id]);

  return (
    <Page
      loading={isLoading || isSubScriptionMutating}
      error={createSubscriptionError as string}
    >
      <div className="w-full border-t border-b border-default-600 px-5 py-10 text-default-800 dark:bg-black">
        <div className="w-full">
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-7/12 lg:pr-10">
              <div className="w-full mx-auto text-default-800 font-light mb-6 border-b border-default-600 pb-6">
                <div className="w-full flex items-center">
                  <div className="overflow-hidden rounded-lg w-16 h-16 "></div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-semibold uppercase text-default-600 dark:text-white">
                      {game?.name}
                    </h6>
                    <p className="text-default-400 mt-2">
                      {game &&
                        game?.badges
                          ?.split(",")
                          .map((badge: string, index: 0) =>
                            badge.length ? (
                              <span
                                key={index}
                                className="badge p-3 mr-2 border-default-600 bg-default-500 dark:bg-default-700 text-white"
                              >
                                {badge}
                              </span>
                            ) : null
                          )}
                    </p>
                  </div>
                  <div className="mr-2">
                    <span className="font-semibold text-default-600 dark:text-white text-xl">
                      €{chargeAmount}
                    </span>
                    <span className="font-semibold text-default-600 dark:text-white text-sm">
                      .00
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-default-600 relative">
                {slots &&
                  slots.map((_, index) => (
                    <div
                      key={index}
                      className="-mx-2 m-4 flex items-end justify-start"
                    >
                      <div className="flex-grow px-2 lg:max-w-md">
                        <label className="text-default-600 dark:text-white  font-semibold text-sm mb-2 ml-1">
                          Username #{index + 1}
                        </label>
                        <div>
                          <input
                            className="input w-full px-3 py-2 border border-default-600 rounded-md focus:outline-none focus:border-default-500 transition-colors dark:bg-black dark:text-white"
                            placeholder="Enter your username"
                            type="text"
                            value={slots[index].username}
                            onChange={(e) => handleSlots(e.target.value, index)}
                          />
                        </div>
                      </div>

                      {slots.length > 2 ? (
                        <div className="px-2 flex w-48 items-center gap-4">
                          <button
                            onClick={(_) => remove(index)}
                            className=" btn btn-error  w-full max-w-xs mx-auto border border-transparent text-white rounded-md px-5 py-2 font-semibold"
                          >
                            Remove Slot
                          </button>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
              <div className="mb-6 pb-6 border-b border-default-600 text-default-800">
                <div className="w-full flex mb-3 items-center">
                  <div className="flex-grow">
                    <span className="text-default-600 dark:text-white">
                      Minimum Slots
                    </span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold text-default-600 dark:text-white">
                      2
                    </span>
                  </div>
                </div>
                <div className="w-full flex mb-3 items-center">
                  <div className="flex-grow">
                    <span className="text-default-600 dark:text-white">
                      Private Dedicated IP
                    </span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={isDedicatedIp}
                      onChange={(_) => toggleDedicatedIp()}
                      className="checkbox checkbox-sm ml-2 checkbox-default"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-default-600 md:border-none text-default-800 text-xl">
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-default-600 dark:text-white">
                      Total
                    </span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold text-default-600 dark:text-white text-sm">
                      EUR
                    </span>{" "}
                    <span className="font-semibold text-default-600 dark:text-white">
                      €{chargeAmount}.00
                    </span>
                  </div>
                </div>
                <span className="mt-4 font-bold text-base text-default-600 dark:text-white">
                  Monthly Subscription
                </span>
              </div>
            </div>
            <div className="px-3 md:w-5/12">
              <div className="w-full mx-auto rounded-lg   border border-default-600 text-default-800 font-light mb-6">
                <div className="w-full p-3 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
