import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
  providers: [ MediaPlugin ]
})
export class MediaPage {
    private file: MediaObject;

    constructor(public navCtrl: NavController, public media: MediaPlugin) {
        const onStatusUpdate = (status) => console.log(status);
        const onSuccess = () => console.log('Operação executada com sucesso.');
        const onError = (error) => console.error('Erro: ' + error.message + ' código: ' + error.code);

        /* /assets/files/audio.mp3 (para executar via browser) */
        const path = '/android_asset/www/assets/files/audio.mp3';
        this.file = this.media.create(path, onStatusUpdate, onSuccess, onError);
    }

    ionViewWillLeave() {
        this.stopFile();
    }

    public playFile(): void {
        this.file.play();
    }

    public pauseFile(): void {
        this.file.pause();
    }

    public stopFile(): void {
        this.file.stop();
    }
}
