import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-certifications.component.html',
  styleUrls: ['./card-certifications.component.css', '../../../classes.css']
})
export class CardCertificationsComponent 
{
  certificates = 
  [
    {id: 1, institute: 'ITonlinelearning', name: 'React Essentials (REA01)', date: 'April 2026'},
    {id: 2, institute: 'LinkedIn Learning', name: 'TypeScript Essential Training', date: 'April 2026'},
    {id: 3, institute: 'LinkedIn Learning', name: 'Sass Essential Training', date: 'March 2026'},
    {id: 4, institute: 'ITonlinelearning', name: 'JavaScript Essentials', date: 'December 2025'},
    {id: 5, institute: 'ITonlinelearning', name: 'Tailwind CSS v1.0', date: 'June 2025'},
    {id: 6, institute: 'ITonlinelearning', name: 'CSS Essentials v1.0', date: 'May 2025'},
    {id: 7, institute: 'ITonlinelearning', name: 'HTML & Web Essentials (HAW01)', date: ' March 2025'},
  ];
}
