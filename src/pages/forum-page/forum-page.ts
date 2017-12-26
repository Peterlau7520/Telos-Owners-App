import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-page',
  templateUrl: 'forum-page.html',
})
export class ForumPage {

  forumsList: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public modalCtrl: ModalController) {
    this.getStaticData();
  }

  getStaticData() {
    for (let i = 0; i < 5; i++) {
      this.forumsList.push({
        "likes": i * 4,
        "comments": 3,
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  openForumDetailsPage() {
    this.navCtrl.push("ForumDetails");
  }

  openReportPage() {

  }

  openWritePostPage() {
    let myModal = this.modalCtrl.create("ForumPostModal");
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

}
