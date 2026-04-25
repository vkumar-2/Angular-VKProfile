import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-education.component.html',
  styleUrls: ['./card-education.component.css', '../../../classes.css']
})
export class CardEducationComponent 
{
  education1 =
  [
    {
      id: 1, 
      institute: 'IT online Learning Academy',
      qualification: 'BCS Tech10 Coding Diploma',
      startDate: 'March 2025',
      endDate: 'Present',
    },
  ];
  education2 =
  [
    {
      id: 2,
      institute: 'Hawk Training',
      qualification: 'CMI Level 3 Business Administration',
      startDate: 'January 2024',
      endDate: '2025',
    },
  ];
  education3 =
  [
    {
      id: 3,
      institute: 'South Thames College',
      qualification: ['IT Level 3 Extended Diploma', 'IT Level 3 90-credit Diploma', 'ICT Level 2 First Extended Certificate'],
      startDate: ['September 2019', 'September 2018', 'September 2017'],
      endDate: [2020, 2019, 2018],
    },
  ];
}
