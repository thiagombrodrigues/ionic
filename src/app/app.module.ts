import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpPage } from '../pages/http/http';
import { CameraPage } from '../pages/camera/camera';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { MapsPage } from '../pages/maps/maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HttpPage,
    CameraPage,
    GeolocationPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HttpPage,
    CameraPage,
    GeolocationPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
