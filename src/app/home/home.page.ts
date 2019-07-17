import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';
import { ViewVideoPage } from '../view-video/view-video.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) {
  }
  playVideoLocal() {
    this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  async viewVideo() {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/zewyvQEqsS4?autoplay=1&cc_load_policy=1' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }
  playVideoHosted() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
