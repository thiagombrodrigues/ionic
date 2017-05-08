import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
  providers: [ Geolocation ]
})
export class GeolocationPage {

  public latitude: number;
  public longitude: number;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad(){
    this.getLocation();
  }

  getLocation():void {

    let loading = this.loadingCtrl.create({
      content: 'Carregando dados...'
    });
    loading.present();

    this.geolocation.getCurrentPosition().then((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      loading.dismiss();
    }, (error) => {
      loading.dismiss();
      alert(error);
    });
  }
}
