import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-post-modal',
  templateUrl: 'forum-post-modal.html',
})
export class ForumPostModal {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPostModal');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
