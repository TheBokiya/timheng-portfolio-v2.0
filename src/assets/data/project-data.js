import {
  faCode,
  faChartScatter,
  faPencilRuler,
} from "@fortawesome/pro-light-svg-icons";

const portfolio = [
  {
    group: "Development",
    icon: faCode,
    projects: [
      {
        title: "SSN Website",
        cover: "ssn-thumbnail.png",
        page: "/portfolio/ssn-website",
      },
      {
        title: "Sabay Corporate Website",
        cover: "sabay-thumbnail.png",
        page: "/portfolio/sabay-website",
      },
      {
        title: "FAM",
        cover: "fam-thumbnail.png",
        page: "/portfolio/fam",
      },
      {
        title: "SWAPP",
        cover: "swapp-thumbnail.png",
        page: "/portfolio/swapp",
      },
      {
        title: "COMMOT",
        cover: "commot-thumbnail.png",
        page: "/portfolio/commot",
      },
    ],
  },
  {
    group: "Visual Analytics",
    icon: faChartScatter,
    projects: [
      {
        title: "Exploring User-Definable Graph Layouts",
        cover: "udgl-thumbnail.png",
        page: "/portfolio/udgl",
      },
      {
        title: "Crime, Climate & Population",
        cover: "ccp-thumbnail.png",
        page: "/portfolio/crime-climate-population",
      },
      {
        title: "Movie Ratings Viz",
        cover: "movie-ratings-thumbnail.png",
        page: "/portfolio/movie-ratings",
      },
    ],
  },
  {
    group: "Design",
    icon: faPencilRuler,
    projects: [
      {
        title: "Project MOMO",
        cover: "momo-thumbnail.png",
        page: "/portfolio/project-momo",
      },
      {
        title: "Science World Evaluation",
        cover: "science-world-thumbnail.png",
        page: "/portfolio/science-world",
      },
      {
        title: "Whatsapp Conceptual Design",
        cover: "whatsapp-conceptual-thumbnail.png",
        page: "/portfolio/whatsapp-conceptual-design",
      },
    ],
  },
];

export default portfolio;
