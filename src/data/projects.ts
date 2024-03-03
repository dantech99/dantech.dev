// ICONO 


type Tech = {
    name: string
    icon: string
};

type Links = {
    name: string;
    link: string;
};


export type Project = {
    image: string;
    title: string;
    description: string;
    category: string[];
    tech: Tech[];
    links: Links[];

};

const projects: Project[] = [
    {
        image: ImgCardPorfolio,
        title: "Title Project",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
        category: ["empresa", "personal"],
        tech: [
            {
                name: "Nextjs"
                icon: 
            }
        ]


    },
    
        

    
]


// export const projects = [
//     {
//       img_link: ImgCardPorfolio,
//       title: "Future Project",
//       description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
//       type: ["empresa", "personal"],
//       tech: [
//           {
//               tec: ImgLaravel,
//           },
//           {
//               tec: ImgPHP,
//           },
//           {
//               tec: ImgMysql,
//           },
//           {
//               tec: ImgTLW,
//           },
          
//       ],
//       link_repo: "",
//       link_deploy: "",
//   },
//   {
//     img_link: ImgCardPorfolio,
//     title: "Future Project",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
//     type: ["empresa", "personal"],
//     tech: [
//         {
//             tec: ImgLaravel,
//         },
//         {
//             tec: ImgPHP,
//         },
//         {
//             tec: ImgMysql,
//         },
//         {
//             tec: ImgTLW,
//         },
        
//     ],
//     link_repo: "",
//     link_deploy: "",
// },
// {
//   img_link: ImgCardPorfolio,
//   title: "Future Project",
//   description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
//   type: ["empresa", "personal"],
//   tech: [
//       {
//           tec: ImgLaravel,
//       },
//       {
//           tec: ImgPHP,
//       },
//       {
//           tec: ImgMysql,
//       },
//       {
//           tec: ImgTLW,
//       },
      
//   ],
//   link_repo: "",
//   link_deploy: "",
// },
  
// ]