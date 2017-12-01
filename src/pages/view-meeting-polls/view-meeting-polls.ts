import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-meeting-polls',
  templateUrl: 'view-meeting-polls.html',
})
export class ViewMeetingPolls {

  scrollerHandle: any;
  header: any;
  headerHeight: any;
  translateAmt: any;
  scaleAmt: any;
  scrollTop: any;
  lastScrollTop: any;
  ticking: any;

  meeting_details: any = {};
  data: any = {};
  events: any = {};

  constructor(public element: ElementRef, public renderer: Renderer, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMeetingPolls');
    this.initParallax();
  }

  ionViewWillEnter() {
    console.log('ionViewDidEnter ViewMeetingPolls');
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

  openViewPoll() {
    let myModal = this.modalCtrl.create("AgreeUseTelos");
    myModal.present();
  }

  expandPoll() {
    
  }


}
