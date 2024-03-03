type Social = {
  name: string;
  link: string;
}

type Presentation = {
  label: string;
  title: string;
  description: string;
  socials: Social[];
}

const presentation: Presentation = {
  label: "Hola, mi nombre es",
  title: "Danilo Macea S.",
  description: "Desarrollador web con +2 años de experiencia en el área de frontend, especializado en el desarrollo de aplicaciones web modernas enfocadas en la experiencia de usuario.",

  socials: [
    {
      name: "GitHub",
      link: "https://github.com/DanTech99"
    },
    {
      name: "linkedin",
      link: "www.linkedin.com/in/danilo-macea"
    }
  ]


}

export default presentation;