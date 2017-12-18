import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePadPage } from '../../pages/signature-pad-page/signature-pad-page';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
/* import { SignaturePageModal } from '../../pages/signature-page-modal/signature-page-modal'; */

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
  is_license_accepted: any = false;
  meeting_details: any = {};
  data: any = {};
  events: any = {};
  total_signatures: any = 2;
  current_signature: any = 1;

  total_HKIDs: any = 2;
  current_HKID: any = 1;

  poll_list: any = [];
  browser: any;

  constructor(public element: ElementRef, public renderer: Renderer, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private iab: InAppBrowser, private youtube: YoutubeVideoPlayer) {
    this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
    this.poll_list =  this.meeting_details.meeting_polls;
    console.log(this.meeting_details);
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

  /* Open modal one by one */

  openViewPoll() {
    let myModal = this.modalCtrl.create("AgreeUseTelos");
    myModal.onDidDismiss(data => {
      console.log(data);
      if (data == "accept") {
        this.openAgreeUseCompanyChop();
      }
      else {

      }
    });
    myModal.present();
  }

  openAgreeUseCompanyChop() {
    let myModal1 = this.modalCtrl.create("AgreeUseCompanyChop");
    myModal1.onDidDismiss(data => {
      console.log(data);
      if (data == "accept") {
        this.acceptAgreement(this.current_signature);
      }
      else {
      }
    });
    myModal1.present();
  }

  acceptAgreement(current_signature) {
    /* this.navCtrl.push(SignaturePageModal); */
    /* let myModal2 = this.modalCtrl.create(SignaturePageModal); */
    let myModal2 = this.modalCtrl.create(SignaturePadPage, {
      "signatures": this.total_signatures,
      "current_signature": this.current_signature
    });
    myModal2.onDidDismiss(data => {
      console.log(data);
      if (!data || typeof data == "undefined") {
        return false;
      }
      else if (data == "thankyou") {
        this.openThankYouNote();
      }
      else if (data == "outside") {

      }
      else {
        this.acceptAgreement(this.current_signature++);
      }
    });
    myModal2.present();
  }

  openThankYouNote() {
    let myModal3 = this.modalCtrl.create("ThankYouNote");
    myModal3.onDidDismiss(data => {
      this.is_license_accepted = true;
    });
    myModal3.present();
  }

  /* End Open modals one by one */

  expandPoll(poll_details: any) {
    poll_details.show = !poll_details.show;
  }

  toggleGroup(poll_details: any) {
    poll_details.show = !poll_details.show;
  }

  isGroupShown(poll_details: any) {
    return poll_details.show;
  }


  getHKIDByOption(poll_details, current_HKID) {
    let myModal4 = this.modalCtrl.create("OwnerHkidNumber", {
      "total_HKIDs": this.total_HKIDs,
      "current_HKID": this.current_HKID
    });
    myModal4.onDidDismiss(data => {
      console.log(data);
      if (!data || typeof data == "undefined") {
        return false;
      }
      else if (data == "submitted") {
        /* this.getHKIDByOption(); */
        poll_details.is_complete = true;
        this.current_HKID = 1;
        this.openThankYouNote2();
      }
      else {
        this.getHKIDByOption(poll_details, this.current_HKID++);
      }
    });
    myModal4.present();
  }

  openMeetingURL() {
    /* this.browser = this.iab.create("https://www.youtube.com/watch?v=6jiNS_4CEug", '_blank', 'location=no,closebuttoncaption=Cancel,clearcache=yes,clearsessioncache=yes'); */
    this.youtube.openVideo('6jiNS_4CEug');
  }

  openThankYouNote2() {
    let myModal5 = this.modalCtrl.create("ThankYouNote2");
    myModal5.onDidDismiss(data => {
      /* this.is_license_accepted = true; */
    });
    myModal5.present();
  }

}