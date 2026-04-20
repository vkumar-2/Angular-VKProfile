import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntroComponent } from './card-intro.component';

describe('CardIntroComponent', () => {
  let component: CardIntroComponent;
  let fixture: ComponentFixture<CardIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardIntroComponent]
    });
    fixture = TestBed.createComponent(CardIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
