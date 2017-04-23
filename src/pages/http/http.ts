import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { HttpService } from './http.service';

@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
  providers: [ HttpService ]
})
export class HttpPage implements OnInit {
  selectedItem: any;
  erros: any = null;
  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http_service: HttpService
  ) { }

  ngOnInit()
  {
    this.fetchContent();
  }

  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Carregando dados...'
    });
    loading.present();
    this.erros = null;
    this.http_service
        .all()
        .subscribe(
            resposta => {
              this.items = resposta['data'];
              loading.dismiss();
            },
            erros => {
              this.erros = erros;
            }
        );
  }

  itemTapped(event, item) {
    this.selectedItem = item;
    console.log(item);
  }
}
