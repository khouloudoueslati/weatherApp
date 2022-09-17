import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityCardComponent } from './weather-city-card.component';

describe('WeatherCityCardComponent', () => {
  let component: WeatherCityCardComponent;
  let fixture: ComponentFixture<WeatherCityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
