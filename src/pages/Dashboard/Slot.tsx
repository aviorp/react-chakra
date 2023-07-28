import { SlotI } from "@/types";

type SlotProps = {
  slot: SlotI;
};
export const Slot = ({ slot }: SlotProps) => {
  const handleVote = async () => {
    // @ts-ignore
    window.modal.showModal();
  };

  return (
    <div className="card w-72 dark:bg-default-900 bg-default-50 text-default-600 dark:text-white relative shadow-xl rounded">
      <div className="badge p-0 bg-green-600  badge-lg rounded-full absolute -top-2 right-4 -mr-6"></div>
      <div className="card-body">
        <h2 className="card-title"> Username: {slot.username}</h2>
        {slot.server_name && <p> Server: {slot.server_name}</p>}
        <p> Votes: {slot.votes || 0}</p>
        <p>
          {" "}
          Created at:
          {" " + slot?.created_at?.substring(0, 10)}
        </p>

        <div className="card-actions">
          <button
            onClick={() => handleVote()}
            className="btn btn-block rounded-full bg-default-500 dark:bg-default-8000 text-white hover:bg-default-400 dark:hover:bg-default-500"
          >
            Update Slot
          </button>
        </div>
      </div>
    </div>
  );
};
