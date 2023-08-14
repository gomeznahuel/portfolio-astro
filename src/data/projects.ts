export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "To-do list!",
    techs: ["Node JS (Express JS)", "TypeScript", "Mongoose", "MongoDB", "Swagger"],
    link: "https://github.com/gomeznahuel/to-do-list",
  },
  {
    title: "Inventory",
    techs: ["Node JS (Nest JS)", "TypeScript", "Mongoose", "MongoDB", "Swagger", "Docker", "React"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "E-Commerce",
    techs: ["Nest JS", "TypeScript", "Mongoose", "MongoDB", "Swagger"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
