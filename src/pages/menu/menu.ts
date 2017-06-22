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

	constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
		this.audio = new Audio('http://163.238.35.166/~lagman/media/menu.mp3');
		this.audio.loop = true;
  }
  ionViewDidEnter () {
    this.audio.play();
  }
	ionViewWillLeave () {
    this.audio.pause();
	}
}
