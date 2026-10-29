import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Project } from '../../models/project';
@Component({
  selector: 'app-project-card',
  imports: [NgClass],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project!: Project;
}
