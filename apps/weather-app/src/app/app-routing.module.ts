import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

const routes: Routes = [
  {
    path: 'weather', component: WeatherDetailsComponent,
    loadChildren: () => import('./weather/weather-details/weather-details.module').then((module) => module.WeatherDetailsModule),
  },
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: '**', redirectTo: 'weather', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }