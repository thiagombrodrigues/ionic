import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HttpPage } from '../pages/http/http';
import { CameraPage } from '../pages/camera/camera';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { ContatosPage } from '../pages/contatos/contatos';
import { MapsPage } from '../pages/maps/maps';
import { AcelerometroPage } from '../pages/acelerometro/acelerometro';
import { LocalStoragePage } from '../pages/local-storage/local-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'LocalStorage', component: LocalStoragePage },
      { title: 'Acelerometro', component: AcelerometroPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'Maps', component: MapsPage },
      { title: 'Contatos', component: ContatosPage },
      { title: 'Media', component: null },
      { title: 'Camera', component: CameraPage },
      { title: 'Http', component: HttpPage },
      { title: 'IndexDB', component: null }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
