import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

// Logos come from Devicon (the same icons people use on their GitHub profile)
const ICONS = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons';

// providedIn: 'root' -> one shared instance for the whole app
@Injectable({
  providedIn: 'root',
})
export class SkillService {
  // fire = Frontend, water = Backend, earth = Databases, air = Tools
  private skills: Skill[] = [
    { name: 'HTML', icon: `${ICONS}/html5/html5-original.svg`, element: 'fire' },
    { name: 'CSS', icon: `${ICONS}/css3/css3-original.svg`, element: 'fire' },
    { name: 'Sass', icon: `${ICONS}/sass/sass-original.svg`, element: 'fire' },
    { name: 'JavaScript', icon: `${ICONS}/javascript/javascript-original.svg`, element: 'fire' },
    { name: 'TypeScript', icon: `${ICONS}/typescript/typescript-original.svg`, element: 'fire' },
    { name: 'Angular', icon: `${ICONS}/angular/angular-original.svg`, element: 'fire' },

    { name: 'Node.js', icon: `${ICONS}/nodejs/nodejs-original.svg`, element: 'water' },
    { name: 'Java', icon: `${ICONS}/java/java-original.svg`, element: 'water' },
    { name: 'Python', icon: `${ICONS}/python/python-original.svg`, element: 'water' },

    { name: 'MySQL', icon: `${ICONS}/mysql/mysql-original.svg`, element: 'earth' },
    { name: 'MongoDB', icon: `${ICONS}/mongodb/mongodb-original.svg`, element: 'earth' },

    { name: 'Git', icon: `${ICONS}/git/git-original.svg`, element: 'air' },
    { name: 'VS Code', icon: `${ICONS}/vscode/vscode-original.svg`, element: 'air' },
  ];

  getSkills(): Skill[] {
    return this.skills;
  }
}
