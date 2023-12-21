import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateHomeComponent } from './climate-home.component';

describe('ClimateHomeComponent', () => {
  let component: ClimateHomeComponent;
  let fixture: ComponentFixture<ClimateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
