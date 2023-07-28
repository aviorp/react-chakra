import { Link } from "react-router-dom";

export const EmptyPage = () => (
  <section className="flex items-center min-h-screen justify-center -mt-16">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        <p className="text-lg font-medium leading-8 text-default-600">
          We are Badly Sad for you 😢
        </p>
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black dark:text-white">
          No Votes found for your account.{" "}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-default-500">
          Start voting now and get your first income.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Link
          to={"/games/102038"}
          className="btn btn-ghost rounded-md bg-default-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-default-700">
          Get started Today &nbsp; 🚀
        </Link>
      </div>
    </div>
  </section>
);
