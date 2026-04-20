import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css', '../../../classes.css']
})
export class CardSkillsComponent 
{
  // run code after component is loaded to DOM
  ngAfterViewInit(): void 
  {
    const x = document.getElementById("test");

    // if x isn't null, continue:
    if (x)
    {
      // hover event
      x.addEventListener('mouseover', () =>
      {
        // alert("Clicked");
      });
    }
    else return;
  }
}
