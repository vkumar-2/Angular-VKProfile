import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  isOpen = false;
  onMenuClick(): void 
  {
    // toggle between true and false
    this.isOpen = !this.isOpen;
  }
}
