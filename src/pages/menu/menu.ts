import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private audio: HTMLAudioElement;
  private hoverAudio: HTMLAudioElement;
  private selectAudio: HTMLAudioElement;
  private leaving: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
		this.audio = new Audio('http://163.238.35.166/~lagman/media/menu.mp3');
		this.audio.loop = true;

    this.hoverAudio = new Audio('http://163.238.35.166/~lagman/media/menu-hover.wav');
		this.hoverAudio.loop = false;

    this.selectAudio = new Audio('http://163.238.35.166/~lagman/media/menu-select.wav');
		this.selectAudio.loop = false;
  }
  ionViewDidEnter () {
    this.leaving = false;
    this.audio.play();
  }
	ionViewWillLeave () {
    this.audio.pause();
	}
  private playHoverSound () : void {
    this.hoverAudio.play();
  }
  private openProjects() : void {
    this.selectAudio.play();
    this.leaving = true;
  }
  private openAbout () : void {
    this.selectAudio.play();
    this.leaving = true;
  }
  private openContact () : void {
    this.selectAudio.play();
    this.leaving = true;
  }
}
