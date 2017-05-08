import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
  providers: [ Geolocation ]
})
export class MapsPage {

  private map: any;

  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController
  ) { }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando dados...'
    });
    loading.present();

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);   
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }   
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
      loading.dismiss();

    }, (error) => {
      loading.dismiss();
      alert(error);
    });
   }
}
