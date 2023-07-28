import Page from "@/layouts/Page";
import banner from "@/assets/banner.avif";

export const About = () => (
  <Page>
    <div className="py-16 h-full  ">
      <div className="container m-auto px-6 text-default-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={banner} alt="image" loading="lazy" width="" height="" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-default-900 dark:text-white font-bold md:text-4xl">
              About GameScoreGenius
            </h2>
            <p className="mt-6 text-default-600 dark:text-default-200">
              GameScoreGenius is a game voting platform that revolutionizes the
              way games are evaluated and recognized for their value. Our
              mission is to empower gamers and developers by providing an
              automated and unbiased voting system that reflects the true
              quality and impact of games.
            </p>
            <p className="mt-4 text-default-600 dark:text-default-200">
              {" "}
              With GameScoreGenius, you can discover and vote for your favorite
              games based on their gameplay mechanics, graphics, storyline, and
              overall experience. Our advanced algorithms analyze user behavior
              and historical data to generate personalized voting
              recommendations, ensuring that each vote counts and contributes to
              an accurate evaluation of a game's value.
            </p>
            <p className="mt-4 text-default-600 dark:text-default-200">
              {" "}
              Transparency and fairness are at the core of our platform. We have
              implemented robust security measures to prevent abuse or
              manipulation, and we strive to provide a level playing field for
              all games to showcase their worth. By automating the voting
              process, GameScoreGenius eliminates biases and ensures a reliable
              and comprehensive understanding of a game's true value.
            </p>
            <p className="mt-4 text-default-600 dark:text-default-200">
              {" "}
              Join our community of passionate gamers and game developers today
              and help shape the future of gaming. Together, let's unlock the
              true potential and value of games with GameScoreGenius!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
