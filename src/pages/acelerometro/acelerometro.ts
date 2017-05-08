import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'page-acelerometro',
  templateUrl: 'acelerometro.html',
  providers: [ DeviceMotion ]
})
export class AcelerometroPage {
  private subscription: any;
  private acelerometro: any = {
    x: 0,
    y: 0,
    z: 0,
    timestamp: null
  };

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public deviceMotion: DeviceMotion
  ) {
    this.acelerometro.x = 0;
    this.acelerometro.y = 0;
    this.acelerometro.z = 0;
  }

  ionViewDidLoad(){

    // Define frequencia de eventos para 1 segundo
    var options = {
        frequency: 1000
    };

    this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
        this.acelerometro = acceleration;
    });    
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }  
}
