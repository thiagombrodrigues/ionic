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
        this.file = this.media.create('/assets/files/audio.mp3', this.onStatusUpdate, this.onSuccess, this.onError);
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

    public onStatusUpdate(status:any): void {
        console.log(status);
    }

    public onSuccess(): void {
        console.log('Operação executada com sucesso.');
    }

    public onError(error:any): void {        
        console.error(error.message);
    }
}
