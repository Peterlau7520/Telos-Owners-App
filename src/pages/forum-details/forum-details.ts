import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-details',
  templateUrl: 'forum-details.html',
})
export class ForumDetails {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumDetails');
  }

  openReportPage() {

  }

}
