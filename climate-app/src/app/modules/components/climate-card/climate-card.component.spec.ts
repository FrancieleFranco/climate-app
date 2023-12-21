import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateCardComponent } from './climate-card.component';

describe('ClimateCardComponent', () => {
  let component: ClimateCardComponent;
  let fixture: ComponentFixture<ClimateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
