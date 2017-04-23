import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {

  public latitude: number;
  public longitude: number;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.getLocation();
  }

  getLocation():void {
    this.geolocation.getCurrentPosition().then((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }, (err) => {
      console.log(err);
    });
  }
}
