export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Library: PW Generator",
    techs: ["TypeScript", "Babel", "Jest"],
    link: "https://www.npmjs.com/package/pw-generator",
  },
  {
    title: "Twitch Bot",
    techs: ["Node JS", "TypeScript", "JavaScript", "dotenv"],
    link: "https://github.com/almanoduerme/twitch-bot",
  },
  {
    title: "Telegram Bot: Expense Tracker",
    techs: ["TypeScript", "node-telegram-bot-api", "googleapis", "dotenv"],
    link: "https://github.com/almanoduerme/expense-tracker",
  },
  {
    title: "To-do list!",
    techs: ["Node JS (Express JS)", "TypeScript", "Mongoose", "MongoDB", "Swagger"],
    link: "https://github.com/almanoduerme/to-do-list",
  },
  {
    title: "E-Commerce - Backend",
    techs: ["Python", "SQL", "Flask"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
