import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css', '../../../classes.css']
})
export class CardExperienceComponent 
{
  achievements = 
  [
    "Improved page load and interaction responsiveness by 20-25% through code restructuring, optimised DOM manipulation, and reusable component structures.",
    "Delivered front-end features across 15+ Agile sprint cycles, maintaining alignment with sprint goals and release timelines",
    "Built and maintained 30+ reusable UI components, reducing future development effort by 35-40%",
    "Liaised with 6-10 stakeholders and UI/UX designers, participating in requirement analysis, development, testing and release phases as part of the full SDLC.",
    "Collaborated with QA during testing, code reviews, and UAT phases, contributing to a 15% reduction in UI-related defects.",                                                    
  ];
  
  returnAchievements(): string
  {
    return this.achievements.map((el) => `<li>${el}</li>`).join('');
  }
}
