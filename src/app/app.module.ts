import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { DeviceMotion } from '@ionic-native/device-motion';



import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpPage } from '../pages/http/http';
import { CameraPage } from '../pages/camera/camera';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { ContatosPage } from '../pages/contatos/contatos';
import { NovoContatoPage } from '../pages/contatos/novo-contato';
import { MapsPage } from '../pages/maps/maps';
import { AcelerometroPage } from '../pages/acelerometro/acelerometro';
import { LocalStoragePage } from '../pages/local-storage/local-storage';
import { MediaPage } from '../pages/media/media';
import { IndexedDBPage } from '../pages/indexed-db/indexed-db';
import { NovoRegistroPage } from '../pages/indexed-db/novo-registro';
import { EditarRegistroPage } from '../pages/indexed-db/editar-registro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HttpPage,
    CameraPage,
    GeolocationPage,
    ContatosPage,
    NovoContatoPage,
    EditarRegistroPage,
    MapsPage,
    AcelerometroPage,
    LocalStoragePage,
    MediaPage,
    IndexedDBPage,
    NovoRegistroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
        name: 'banco_dados',
        driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HttpPage,
    CameraPage,
    GeolocationPage,
    ContatosPage,
    NovoContatoPage,
    EditarRegistroPage,
    MapsPage,
    AcelerometroPage,
    LocalStoragePage,
    MediaPage,
    IndexedDBPage,
    NovoRegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    DeviceMotion,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
