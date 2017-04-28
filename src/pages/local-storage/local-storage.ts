import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html'
})
export class LocalStoragePage {

  constructor(
    public navCtrl: NavController,
    //private nativeStorage: NativeStorage
    public storage: Storage


  ) { 


    storage.ready().then(() => {

       // set a key/value
       storage.set('name', 'Max');

       // Or to get a key/value pair
       storage.get('age').then((val) => {
         //console.log('Your age is', val);
         alert('Your age is' + val);
       })
     });





  }

}
