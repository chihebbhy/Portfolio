import { Injectable } from '@angular/core';
import { Project } from '../models/project';

// providedIn: 'root' -> one shared instance for the whole app
@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[] = [{
        id: 1,
        title:        "CloudJump",
        description:  "CloudJump is a web game inspired from Google Chrome's offline dinosaur game.",
        images:       ["/images/dinoCool.png"],
        technologies: ["HTML5","CSS3","JS","PIXEL ART"],
        element:      "fire",
        github:       "https://github.com/chihebbhy/ChihebBenHadjYahia_DinoCool",
        stream:       "https://chihebbhy.github.io/ChihebBenHadjYahia_DinoCool/"
    },
    {
        id: 2,
        title:        "Neural-Pong",
        description:  "Pong, but one of the paddles is controlled by a neural network.",
        images:       ["/images/neuralPong.png"],
        technologies: ["Python","pygame","Neural Network"],
        element:      "air",
        github:       "https://github.com/chihebbhy/Neural-Pong",
    },
    {
        id: 3,
        title:        "Portfolio",
        description:  "My personal portfolio website.",
        images:       ["/images/portfolio.png"],
        technologies: ["Angular","TypeScript","scss","HTML5","CSS3","JS"],
        element:      "fire",
    },
    {
        id: 4,
        title:        "Mini-Shell",
        description:  "A simple shell that can execute commands.",
        images:       ["/images/miniShell.png"],
        technologies: ["C","Linux"],
        element:      "earth",
        github:       "https://github.com/chihebbhy/mini-shell"
    }];

    getProjects(): Project[] {
        return this.projects;
    }
    getProjectById(id: number): Project | null {
        return this.projects.find((project)=> project.id === id) ?? null;
    }
}
