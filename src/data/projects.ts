
import Nextjs from "@/icons/Nextjs.astro";
import Supabase from '@/icons/Supabase.astro'
import Laravel from "@/icons/Laravel.astro";
import Mysql from '@/icons/Mysql.astro'
import Link from '@/icons/Link.astro';
import Js from "@/icons/js.astro";
import  CodeSvg from "@/icons/CodeSvg.astro"

interface Projects {
  image: string;
  title: string;
  description: string;
  badges: Array<string>;
  links: Array<any>;
  tech: Array<any>;
}

const projects: Projects[] = [
  {
    image: '/img/recycling.jpg',
    title: 'Recycling Bikes',
    description:
      'Aplicación web de comercio electrónico para la renta y compra de bicicletas usadas.',
    badges: ['web', 'freelance', 'startup'],
    links: [
      {
        name: 'Preview',
        url: 'https://www.recyclingbikes.co/',
        icon: Link
      },
      {
        name: 'Code',
        url: 'https://github.com/Recycling-Bikes/recycling-web',
        icon: CodeSvg
      }
    ],
    tech: [ {
      name: "Next.js",
      icon: Nextjs
    },
    {
      name: "Supabase",
      icon: Supabase
    }
  ],
  },

  {
    image: '/img/nutriasoft.jpg',
    title: 'NutriaSoft.dev',
    description:
      'Landing page para la startup nutriasoft que ofrece servicios software',
    badges: ['empresa', 'web', 'freelance'],
    links: [
      {
        name: 'Preview',
        url: 'https://nutriasoft.dev/',
        icon: Link
      },
      {
        name: 'Code',
        url: 'https://github.com/NutriaSoft/nutriasoft.dev',
        icon: CodeSvg
      }
    ],
    tech: [ {
      name: "Laravel",
      icon: Laravel
    },
    {
      name: "Mysql",
      icon: Mysql
    }
  ]
  },

  {
    image: '/img/freedeves.jpg',
    title: 'FreedevTube',
    description:
      'Plataforma de cursos gratis impartidos por creadores de contenido sobre desarrollo de software, diseño, ciberseguridad y más.',
    badges: ['personal', 'web', 'hackathon'],
    links: [
      {
      name: 'Preview',
      url: 'https://freedev-tube.vercel.app/',
      icon: Link
      },
      {
        name: 'Code',
        url: 'https://github.com/dantech99/FreedevTube',
        icon: CodeSvg
      }
    ],
    tech: [ {
      name: "Next.js",
      icon:   Nextjs
    },
    {
      name: "Supabase",
      icon: Supabase
    }
  ]
  },
  
  {
    image: '/img/gesccol.jpg',
    title: 'Gesccol E.I.C.E',
    description:
      'Sitio web del gestor catastral de Sahagún, Córdoba, para la difusión de información pública a la ciudadanía.',
    badges: ['personal', 'web', 'game', 'hackathon'],
    links: [
      // {
      // name: 'Preview',
      // url: 'https://pat-attack-three.vercel.app/',
      // icon: Link
      // },
      {
        name: 'Code',
        url: 'https://github.com/dantech99/Gesccol-Web-App',
        icon: CodeSvg
      }
    ],
    tech: [ {
      name: "Next.js",
      icon:   Nextjs
    },
    {
      name: "Javascript",
      icon: Js
    }
  ]
  },
  
];


export default projects;