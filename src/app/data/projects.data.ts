import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    title: "Locazon",
    image: "assets/Locazonn.png",
    technologies: "React | Mongo | CSS | Node | JWT ",
    description: " It is developed to enhance the local tourism experience for tourists and provide shopkeepers with a better market within one region. Implemented with NodeJs, ExpressJs, React and MongoDB, 12 screens are planned for the UI.",
    github: "https://github.com/yashraj9932/locazon",
    deployed: "https://locazon.vercel.app/",
    bgcolor: "#3e67ff",
    id: "1"
  },
  {
    title: "Insta Clone",
    image: "assets/InstaSS.png",
    description: "This is a very basic version / clone of the Insta, that we have today in the market, it is developed on MERN Stack.",
    technologies: "React | Mongo | CSS | Node | JWT | Bootstrap",
    github: "https://github.com/yashraj9932/socialmedia_backend",
    deployed: "https://instaaclone.vercel.app/login",
    bgcolor: "#ffcc33",
    id: "2"
  },
  {
    title: "Assignment Portal",
    image: "assets/AP.png",
    technologies: " Express | Mongo | JWT | Node",
    description: "Assignment Portal is a backend app built on Node alongwith Express and Mongo, it authenticates students and teachers through JWT and here teachers can give assignments, while students can complete and provide solutions to it with a many to many connection.",
    github: "https://github.com/yashraj9932/assignment_portal_backend",
    deployed: "https://assignmentportal.vercel.app/",
    bgcolor: "#6c4bf4",
    id: "3"
  }
]; 