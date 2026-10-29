import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
