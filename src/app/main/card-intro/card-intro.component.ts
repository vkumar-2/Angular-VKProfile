import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-intro.component.html',
  styleUrls: ['./card-intro.component.css', '../../../classes.css']
})
export class CardIntroComponent 
{
  x = "test_variable";
  y = ["a", "b", "c", 1, 2, 3];
  z = () =>
  {
    return 'message received';
  }

  // call: {{message1}} goes in component html
  @Input() message1 = this.y[3];
  @Input() message2 = this.z();
}
