import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
	private menuPage = MenuPage;
  private audio: HTMLAudioElement;
  private exitAudio: HTMLAudioElement;
  private hoverAudio: HTMLAudioElement;
  private leaving: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
		this.audio = new Audio('http://163.238.35.166/~lagman/media/splash.mp3');
		this.audio.loop = true;
    this.exitAudio = new Audio('http://163.238.35.166/~lagman/media/splashExit.wav');
    this.exitAudio.loop = false;
    this.hoverAudio = new Audio('http://163.238.35.166/~lagman/media/splashHover.wav');
    this.hoverAudio.loop = false;
  }
  ionViewDidEnter () {
    this.audio.play();
  }
	ionViewWillLeave () {
    this.audio.pause();
	}
  private hoverButton () : void {
    this.hoverAudio.play();
  }
	private enterMenu () : void {
    this.leaving = true;
    this.exitAudio.play();
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		})
		.then(() => {
			this.navCtrl.push(MenuPage);
		});
	}
}
