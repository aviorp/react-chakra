import background from "./background.svg";

export const Discord = () => {
  return (
    <div
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12 fixed z-50 inset-0 overflow-y-auto h-full w-full px-4"
      style={{
        backgroundImage: `url(${background})`
      }}>
      <div
        className="bg-white min-w-1xl flex flex-col shadow-lg"
        style={{
          backgroundColor: "#36393f"
        }}>
        <div className="px-16 py-7 text-center">
          <img
            className="h-24 m-auto rounded-full mb-2"
            src="https://i1.sndcdn.com/avatars-WnxO40ryvv3YEAte-Oq76Wg-t500x500.jpg"
          />
          <p className="text-gray-300 text-center mt-4">
            Unlock a world of gaming greatness.
          </p>
          <div className="flex m-auto">
            <h2 className="text-gray-100 text-3xl font-semibold text-center mx-auto mt-3">
              Join us on GameScoreGenius today!
            </h2>
          </div>
          <br />
          <a href="https://discord.gg/mH3F3wmP">
            <p
              className="text-white text-center w-1/2 m-auto shadow-md py-2 px-2 rounded-sm"
              style={{
                backgroundColor:
                  "hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%)"
              }}>
              Join Discord
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
