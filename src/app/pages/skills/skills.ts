import { Component } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skill, ElementType } from '../../models/skill';
import { SkillCard } from '../../shared/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [];
  selected: ElementType | 'all' = 'all';

  // The buttons above the cards
  filters: { value: ElementType | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'fire', label: '🔥 Frontend' },
    { value: 'water', label: '🌊 Backend' },
    { value: 'earth', label: '🪨 Databases' },
    { value: 'air', label: '🌪️ Tools' },
  ];

  // Angular gives us the service automatically (dependency injection)
  constructor(private skillService: SkillService) {
    this.skills = this.skillService.getSkills();
  }

  // Called when a filter button is clicked
  select(value: ElementType | 'all') {
    this.selected = value;
  }

  // Only the skills of the selected element
  get filteredSkills(): Skill[] {
    if (this.selected === 'all') {
      return this.skills;
    }
    return this.skills.filter((s) => s.element === this.selected);
  }
}
