type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ngomezdw@gmail.com",
  title: "Hi there, I'm Nahuel 👋",
  // profile: "/profile.webp",
  description:
    "A *Backend developer* with over *3 years* of web experience, specializing in *JavaScript (Nest JS / Express JS), TypeScript and SQL*. My work spans a range of projects, including creating ecommerce websites and managing databases. I have *knowledge* in *Frontend*.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/gomeznahuel",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gomeznahuel/",
    },
    {
      label: "X",
      link: "https://twitter.com/gomeznahueldev",
    },
  ],
};

export default presentation;