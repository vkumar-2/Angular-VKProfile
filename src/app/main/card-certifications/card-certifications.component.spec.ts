import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCertificationsComponent } from './card-certifications.component';

describe('CardCertificationsComponent', () => {
  let component: CardCertificationsComponent;
  let fixture: ComponentFixture<CardCertificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardCertificationsComponent]
    });
    fixture = TestBed.createComponent(CardCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
