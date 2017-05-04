import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html',
  providers: [ NativeStorage ]
})
export class LocalStoragePage {

  private nome: string;

  constructor(
    public navCtrl: NavController,
    public nativeStorage: NativeStorage,
    public alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    this.nativeStorage.getItem('usuario').then(
      data => this.nome = data,
      error => this.nome = null
    );
  }

  public save(): void {
    this.nativeStorage.setItem('usuario', this.nome)
    .then(
      () => {
          let mensagem = this.alertCtrl.create({
            title: 'Local storage',
            subTitle: 'Nome salvo com sucesso!',
            buttons: ['Voltar']
          });
          mensagem.present();
      },
      error => alert(error)
    );
  }

  public clear(): void {
    this.nativeStorage.clear().then(
      () => this.nome = null,
      error => alert(error)
    );

  }
}
