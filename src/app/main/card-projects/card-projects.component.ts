import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.css', '../../../classes.css']
})
export class CardProjectsComponent 
{
  url = 'https://github.com/vkumar-2';
  projects =
  [
    {
      id: 1, 
      title: 'SecureKey', 
      subtitle: 'Password Generator', 
      date: 'April 2026',
      url: `${this.url}/React-SecureKey`,
      frameworks: ['React', 'TypeScript'],
      descriptions: 
      [
        "Configurable password generator, supporting 6-100 characters including lowercase, uppercase, numbers and special characters.",
        "4+ core UI features, including length adjustment, character-set toggles, and reset options to enhance UX.",
        "Used TypeScript to define typed props, React state, and component logic.",
      ],
    },
    {
      id: 2, 
      title: 'ExpenseFlow', 
      subtitle: 'Expense Tracker', 
      date: 'March 2026',
      url: `${this.url}/React-ExpenseFlow`,
      frameworks: ['React', 'Sass', 'Vite'],
      descriptions: 
      [
        "Budget tracking app featuring add, search and delete transaction functionality across 5 expense and income categories.",
        "Real-time financial analytics implemented using React hooks, state management, conditional JSX rendering and JavaScript array methods.",
        "Multi-field search UI included, covering client-side data validations to reduce invalid form submissions.",
        "Created reusable SCSS-based styling architecture for separating UI from business logic and maintaining consistent UX across different screen sizes.",
      ],
    },
    {
      id: 3,
      title: 'DualTimer',
      subtitle: 'Timer & Stopwatch',
      date: 'November 2025',
      url: `${this.url}/DualTimer`,
      frameworks: ['Tailwind', 'Node.js', 'JavaScript'],
      descriptions: 
      [
        "Implemented dual stopwatch and countdown timers, compatible across multiple device sizes.",
        "Applied object-oriented models to improve code maintainability by 40-50%.",
        "Improved UI/UX through by applying accessibility features, different theme modes and responsive layouts.",
      ],
    },
    {
      id: 3,
      title: 'Calculator-UX',
      subtitle: 'Arithmetic, Geometry, BMI',
      date: 'September 2025',
      url: `${this.url}/Calculator-UX`,
      frameworks: ['Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
      descriptions:
      [
        "Dynamic multi-purpose calculator, handling 10+ calculation types including: arithmetic, BMI, and geometry - perimeters, areas of 2D shapes and volume of 3D shapes.",
        "Implemented modular JavaScript logic to reduce code duplication by 25-30%.",
        "Enhanced UX through real-time data validation and UI feedback mechanisms.",
        "Bootstrap UI components used for improving layout, application structure and responsiveness.",
      ],
    },
    {
      id: 4,
      title: 'eCommerce',
      subtitle: 'Commercial Website',
      date: 'February 2025',
      url: `${this.url}/eCommerce`,
      frameworks: ['HTML5', 'CSS3'],
      descriptions:
      [
        "Static multi-page eCommerce site focused on practicing layout, navigation and responsive UI designs.",
        "CSS media queries used for maintaining responsive pages across different viewports.",
        "Applied modern CSS layouts (e.g. flexbox and grids) for aligning contents and organising products in a clear, scalable way.",
      ],
    },
  ];
}
