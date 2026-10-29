import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill-card',
  imports: [NgClass],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  // The parent gives us the skill: <app-skill-card [skill]="s" />
  @Input() skill!: Skill;
}
