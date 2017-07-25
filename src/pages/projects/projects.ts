import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  private backgroundAudio: HTMLAudioElement;
  private confirmAudio: HTMLAudioElement;

  private preview: number;

  private alert: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    this.backgroundAudio = new Audio('http://163.238.35.166/~lagman/media/nikolagman/projects/background.mp3');
    this.backgroundAudio.loop = true;
    this.confirmAudio = new Audio('http://163.238.35.166/~lagman/media/nikolagman/projects/mario_ok.wav');
    this.confirmAudio.loop = false;
    return;
  }
  ionViewDidEnter () : void {
    this.backgroundAudio.play();
    this.preview = 1;
    return;
	}
	ionViewWillLeave () : void {
		this.backgroundAudio.pause();
	}

  private changePreview(i: number) : void {
    this.preview = i;
    return;
  }

  private openProject (i: number) : void {
    this.confirmAudio.play();
    switch (i) {
      case 1:
        this.alertCtrl.create({
          title: 'Wait!',
          subTitle: 'You are already on it. This website is already project #1.',
          buttons: ['Oh, okay!']
        }).present();
        break;
      case 2:
        window.open('http://163.238.35.166/~lagman/reverse/');
				break;
      case 3:
        this.alertCtrl.create({
          title: 'Not yet available!',
          subTitle: 'This level has not been unlocked yet.',
          buttons: ['Oh, darn it!']
        }).present();
        break;
      case 4:
        window.open('http://163.238.35.166/~lagman/project1/');
        break;
      case 5:
        window.open('http://163.238.35.166/~lagman/project1/');
        break;
      default:
    }
  }

}
