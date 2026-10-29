import { ElementType } from './skill';

export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[]; // URL of the images
    technologies: string[]; // List of technologies used
    element: ElementType; // color of the card
    github?: string; // URL of the GitHub repository
    stream?: string; // URL of the live project
}
