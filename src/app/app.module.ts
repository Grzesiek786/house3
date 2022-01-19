import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import localePL from '@angular/common/locales/pl';

import { AppComponent } from './app.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HousesCardComponent } from './components/houses-card/houses-card.component';
import { LocaleCurrencyPipe } from './shares/locale-currency.pipe';
import { ColorStatusDirective } from './shares/colors-status.directive';
import { DialogComponent } from './components/dialog/dialog.component';
import { PopupPhotoComponent } from './components/dialog/popup-photo/popup-photo.component';

registerLocaleData(localePL)

@NgModule({
  declarations: [
    AppComponent,
    HouseCardComponent,
    HousesCardComponent,
    LocaleCurrencyPipe,
    ColorStatusDirective,
    DialogComponent,
    PopupPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
