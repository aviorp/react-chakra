import { FC, useEffect } from "react";

type SnackbarProps = {
  message: string;
  type?: "info" | "error" | "success" | "warning" | "alert";
};
export const Snackbar: FC<SnackbarProps> = ({ message }) => {
  useEffect(() => {
    setTimeout(() => {
      const toast = document.querySelector(".toast");
      if (toast) toast.classList.add("hidden");
    }, 3000);
  }, [message]);

  return (
    <div
      className="toast w-96 toast-bottom toast-center "
      style={{
        zIndex: 9999
      }}>
      <div className="alert bg-default-700">
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
};
