export interface Project {
  id: string;
  title: string;
  image: string;
  technologies: string;
  description: string;
  github: string;
  deployed: string;
  bgcolor: string;
}

export interface Experience {
  id: string;
  title: string;
  image: string;
  technologies: string;
  description: string;
  deployed: string;
  bgcolor: string;
  position: string;
}

export interface Poem {
  heading: string;
  poem: string;
  author: string;
}

export interface PersonalDetails {
  name: string;
  location: string;
  tagline: string;
  email: string;
  availability: string;
  brand: string;
} 