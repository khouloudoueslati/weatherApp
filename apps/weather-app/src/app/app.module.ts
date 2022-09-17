import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxToolbarModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { DataService } from './services/data.service';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    DxToolbarModule,
    DxButtonModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    DataService,
    WeatherService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
