import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-past-meeting-details',
  templateUrl: 'view-past-meeting-details.html',
})
export class ViewPastMeetingDetails {

  scrollerHandle: any;
  header: any;
  headerHeight: any;
  translateAmt: any;
  scaleAmt: any;
  scrollTop: any;
  lastScrollTop: any;
  ticking: any;
  is_license_accepted: any = true;
  meeting_details: any = {};
  data: any = {};
  events: any = {};

  poll_list: any = [];

  constructor(public element: ElementRef, public renderer: Renderer, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMeetingPolls');
    this.initParallax();
  }

  ionViewWillEnter() {
    console.log('ionViewDidEnter ViewMeetingPolls');
    this.getStaticData();
  }

  /* Start Parallax */
  initParallax() {
    this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = this.scrollerHandle.firstElementChild;
    this.headerHeight = this.scrollerHandle.clientHeight;
    this.ticking = false;
    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    window.addEventListener('resize', () => {
      this.headerHeight = this.scrollerHandle.clientHeight;
    }, false);
    this.scrollerHandle.addEventListener('scroll', () => {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateElasticHeader();
        });
      }
      this.ticking = true;
    });
  }

  updateElasticHeader() {
    this.scrollTop = this.scrollerHandle.scrollTop;
    if (this.scrollTop >= 0) {
      this.translateAmt = this.scrollTop / 2;
      this.scaleAmt = 1;
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
    }
    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    this.ticking = false;
  }
  /* End Parallax */

  expandPoll(poll_details: any) {
    poll_details.show = !poll_details.show;
  }

  toggleGroup(poll_details: any) {
    poll_details.show = !poll_details.show;
  }

  isGroupShown(poll_details: any) {
    return poll_details.show;
  }

  getStaticData() {
    this.poll_list = [];
    for (let i = 0; i < 1; i++) {
      let tmp_option_list = [];
      this.poll_list.push({
        "poll_title": "Poll " + (i + 1),
        "is_complete": false
      });
      for (let j = 0; j < 3; j++) {
        let tmp_option_value = 6 - (j * 3);
        if (tmp_option_value == 0) {
          tmp_option_value = 1;
        }
        tmp_option_list.push({
          "option_title": "Option " + (j + 1),
          "option_value": tmp_option_value + "0%"
        });
      }
      this.poll_list[i].option_list = tmp_option_list;
    }
    console.log(this.poll_list);
  }

}
