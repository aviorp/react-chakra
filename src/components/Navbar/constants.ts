type NavbarItem = {
  name: string;
  to: string;
  children?: NavbarItem[];
};

export const NAVBAR_ITEMS: NavbarItem[] = [
  // {
  //   name: "KaizenMS",
  //   to: "/games/102038"
  // },
  // {
  //   name: "Games",
  //   children: [
  //     {
  //       title: "MapleStory",
  //       subtitle:
  //         "The Most Nostalgic and loved Game of all time. Vote for your favorite MapleStory private server!",
  //       to: "/games/maplestory"
  //     },
  //     {
  //       title: "RuneScape",
  //       subtitle: "Vote for your favorite RuneScape private server!",
  //       to: "/games/runescape"
  //     },
  //     {
  //       title: "World of Warcraft",
  //       subtitle: "Vote for your favorite World of Warcraft private server!",
  //       to: "/games/wow"
  //     },
  //     {
  //       title: "Minecraft",
  //       subtitle:
  //         "Build your own world! Vote for your favorite Minecraft server!",
  //       to: "/games/minecraft"
  //     },
  //     {
  //       title: "MU Online",
  //       subtitle:
  //         "Unleash the power of the gods! Vote for your favorite MU server!",
  //       to: "/games/mu"
  //     }
  //   ]
  // },

  {
    name: "FAQ",
    to: "/faq"
  },
  {
    name: "About",
    to: "/about"
  },
  {
    name: "Discord",
    to: "/discord"
  }
];
