import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
	private menuPage = MenuPage;
  private audio: HTMLAudioElement;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
    this.audio = new Audio('../assets/splash.mp3');
  }
  ionViewDidEnter () {
    this.audio.play();
  }
	ionViewWillLeave () {
    this.audio.pause();
	}

}
