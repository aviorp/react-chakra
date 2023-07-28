import Page from "@/layouts/Page";

export const Faq = () => (
  <Page>
    <div className="p-4">
      <h1 className="text-center text-2xl mt-4 mb-8 dark:text-white">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-plus  rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium dark:text-white">
          Is it safe to use?
        </div>
        <div className="collapse-content">
          <p className="dark:text-white">
            Yes, the bot utilizes different IP addresses for each vote, ensuring
            that it remains separate from your personal accounts and activities.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus  rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium dark:text-white">
          Is it worth the money?
        </div>
        <div className="collapse-content">
          <p className="dark:text-white">
            Consider the benefits: with this bot, you can earn vote credits on a
            daily basis. Let's say you have multiple accounts, and each day you
            accumulate a total of X vote credits per account. If you have Y
            accounts, the combined daily vote credits would be X * Y. Over a
            month, this would result in approximately Z vote credits. By
            exchanging these vote credits, you can gain various advantages or
            rewards, which can be quite valuable. Ultimately, for just €5 per
            month, the potential benefits you can obtain through these vote
            credits may make it worth the investment.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium dark:text-white">
          How can I play safely and avoid get banned?
        </div>
        <div className="collapse-content flex flex-col gap-4">
          <p className="dark:text-white">
            To minimize the risk of penalties or account bans, it is advisable
            to follow these precautions:
          </p>
          <ol>
            <li className="dark:text-white">
              Avoid logging in to your accounts from the same IP address, MAC
              address, and volume ID.
            </li>
            <li className="dark:text-white">
              Utilize a different computer or a virtual machine (VM) with
              distinct IP/MAC/volume ID settings.
            </li>
            <li className="dark:text-white">
              Always make use of a reliable VPN service to conceal your IP
              address during the voting process.
            </li>
            <li className="dark:text-white">
              Level up your accounts to a certain threshold, such as level 15,
              before adding them to the voting dashboard.
            </li>
          </ol>
          <p className="dark:text-white">
            By implementing these safety measures, you can enhance your chances
            of maintaining a secure and sustainable voting strategy, reducing
            the likelihood of negative consequences.
          </p>
        </div>
      </div>
    </div>
  </Page>
);
