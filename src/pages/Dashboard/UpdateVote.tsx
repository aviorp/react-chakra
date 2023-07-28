import { useState, FC } from "react";

type UpdateVoteProps = {
  updateHandler: (username: string) => void;
  isLoading: boolean;
};
export const UpdateVote: FC<UpdateVoteProps> = ({
  updateHandler,
  isLoading
}) => {
  const [username, setUsername] = useState("");

  const close = () => {
    setUsername("");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.modal.close();
  };
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box rounded gap-6 flex flex-col dark:bg-black dark:text-white">
        <div onKeyDown={e => e.key !== "Enter"} className="gap-6 flex flex-col">
          <button
            onClick={() => close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-lg">Update Vote</h3>
          <input
            type="text"
            className="input w-full border-default-600 dark:text-black rounded-full"
            placeholder="Enter New Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <p>* Your vote will be updated and the counter will be reset to 0.</p>
        </div>
        <button
          className="btn bg-default-500 hover:bg-default-600 text-white dark:bg-default-700 dark:hover:bg-default-900 dark:text-white  block rounded-full "
          disabled={username.length < 2}
          onClick={() => {
            updateHandler(username);
            close();
          }}>
          {isLoading ? <span className="loading loading-spinner " /> : "Update"}
        </button>
      </div>
    </dialog>
  );
};
