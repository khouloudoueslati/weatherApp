import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCitiesListComponent } from './weather-cities-list.component';

describe('CitiesListComponent', () => {
  let component: WeatherCitiesListComponent;
  let fixture: ComponentFixture<WeatherCitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
