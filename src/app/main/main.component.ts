import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { CardIntroComponent } from './card-intro/card-intro.component';
import { CardSkillsComponent } from './card-skills/card-skills.component';
import { CardExperienceComponent } from './card-experience/card-experience.component';
import { CardProjectsComponent } from './card-projects/card-projects.component';
import { CardEducationComponent } from './card-education/card-education.component';
import { CardCertificationsComponent } from './card-certifications/card-certifications.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardIntroComponent, CardExperienceComponent, CardSkillsComponent, 
    CardProjectsComponent, CardEducationComponent, CardCertificationsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../classes.css']
})
export class MainComponent implements OnInit
{
  isXL = false;
  ngOnInit(): void
  {
    this.alignComponents();
  }
  @HostListener('window:resize')
  onResize(): void
  {
    this.alignComponents();
  }
  alignComponents(): void
  {
    this.isXL = window.matchMedia('(min-width: 1200px)').matches;
  }
}