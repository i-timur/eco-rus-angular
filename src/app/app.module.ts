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
import { HomeCardComponent } from './components/home-card/home-card.component';
import { ModalContainerComponent } from './components/modals/modal-container/modal-container.component';
import {PortalModule} from '@angular/cdk/portal';
import { SignInDialogComponent } from './components/modals/sign-in-dialog/sign-in-dialog.component';
import { InputComponent } from './components/ui/input/input.component';
import {DialogModule} from '@angular/cdk-experimental/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BtnComponent } from './components/ui/btn/btn.component';
import { TextBtnComponent } from './components/ui/text-btn/text-btn.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignUpDialogComponent } from './components/modals/sign-up-dialog/sign-up-dialog.component';
import { SignInWithPhoneComponent } from './components/modals/sign-in-with-phone/sign-in-with-phone.component';
import { EnterCodeDialogComponent } from './components/modals/enter-code-dialog/enter-code-dialog.component';
import { SignInForPartnersDialogComponent } from './components/modals/sign-in-for-partners-dialog/sign-in-for-partners-dialog.component';
import {UrlInterceptorService} from '@services/url-interceptor.service';
import {AuthInterceptorService} from '@services/auth-interceptor.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { OrderBtnComponent } from './components/ui/order-btn/order-btn.component';
import { QrCodeDialogComponent } from './components/modals/qr-code-dialog/qr-code-dialog.component';
import { MarketCardComponent } from './components/market-card/market-card.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { MinorLayoutComponent } from './components/minor-layout/minor-layout.component';
import { SearchBarComponent } from './components/ui/search-bar/search-bar.component';
import { DropdownComponent } from './components/ui/dropdown/dropdown.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import { MapCardComponent } from './components/map-card/map-card.component';
import { MapCardsComponent } from './components/map-cards/map-cards.component';
import { MapCardDetailsComponent } from './components/map-card-details/map-card-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserPromoCodesComponent } from './components/user-promo-codes/user-promo-codes.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { MaterialPipe } from './pipes/material.pipe';
import { UserPromoCodeComponent } from './components/user-promo-code/user-promo-code.component';
import { NavbarMobileDialogComponent } from './components/modals/navbar-mobile-dialog/navbar-mobile-dialog.component';

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
    HomeCardComponent,
    ModalContainerComponent,
    SignInDialogComponent,
    InputComponent,
    BtnComponent,
    TextBtnComponent,
    SignUpDialogComponent,
    SignInWithPhoneComponent,
    EnterCodeDialogComponent,
    SignInForPartnersDialogComponent,
    SafeHtmlPipe,
    CheckboxGroupComponent,
    OrderBtnComponent,
    QrCodeDialogComponent,
    MarketCardComponent,
    MapContainerComponent,
    MinorLayoutComponent,
    SearchBarComponent,
    DropdownComponent,
    MapCardComponent,
    MapCardsComponent,
    MapCardDetailsComponent,
    ProfileComponent,
    UserPromoCodesComponent,
    UserHistoryComponent,
    HistoryItemComponent,
    MaterialPipe,
    UserPromoCodeComponent,
    NavbarMobileDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    PortalModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    OverlayModule,
    A11yModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
