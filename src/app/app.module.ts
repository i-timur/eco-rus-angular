import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';
import { MapComponent } from './pages/map/map.component';
import {SwiperModule} from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlideBtnComponent } from './components/ui/slide-btn/slide-btn.component';
import { HomeCardComponent } from './components/home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    MarketComponent,
    MapComponent,
    SliderComponent,
    SlideComponent,
    SlideBtnComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
