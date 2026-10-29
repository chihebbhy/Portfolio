// The four elements. Each one is used as a category of skills.
export type ElementType = 'fire' | 'water' | 'earth' | 'air';

// What one skill looks like
export interface Skill {
  name: string;
  icon: string; // URL of the logo
  element: ElementType;
}
