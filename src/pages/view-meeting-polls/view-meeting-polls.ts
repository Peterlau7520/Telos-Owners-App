import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePadPage } from '../../pages/signature-pad-page/signature-pad-page';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
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
  loginResponse: any = {};
  signatureArray: any = [];

  total_HKIDs: any = 2;
  current_HKID: any = 1;
  HKIDArray: any = [];

  poll_list: any = [];
  browser: any;

  constructor(public element: ElementRef, public renderer: Renderer, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    private youtube: YoutubeVideoPlayer,
    private transfer: FileTransfer,
    private file: File,
    private document: DocumentViewer,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.poll_list = this.meeting_details.meeting_polls;
    this.checkIfproxyAppointed(this.loginResponse);
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
        console.log(this.loginResponse);
        if (this.loginResponse.user.nature == "CorporateOwner") {
          this.openAgreeUseCompanyChop();
        }
        else {
          this.total_signatures = this.loginResponse.user.numberOfOwners;
          this.current_signature = 1;
          this.acceptAgreement(this.current_signature, this.total_signatures);
        }
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
        this.signatureArray = [];
        this.acceptAgreement(this.current_signature, this.total_signatures);
      }
      else {
      }
    });
    myModal1.present();
  }

  acceptAgreement(current_signature, total_signatures) {
    /* this.navCtrl.push(SignaturePageModal); */
    /* let myModal2 = this.modalCtrl.create(SignaturePageModal); */
    let myModal2 = this.modalCtrl.create(SignaturePadPage, {
      "signatures": total_signatures,
      "current_signature": this.current_signature
    });
    myModal2.onDidDismiss(data => {
      console.log(data);
      if (!data || typeof data == "undefined") {
        return false;
      }
      else if (data.closeType == "thankyou") {
        this.signatureArray.push({ "image": data.signatureData, "account": this.loginResponse.user.account, "estate": this.loginResponse.user.estateName });
        console.log(this.signatureArray);
        /* this.openThankYouNote(); */
        this.saveAllSignatures(this.signatureArray);
      }
      else if (data.closeType == "outside") {

      }
      else {
        this.signatureArray.push({ "image": data.signatureData, "account": this.loginResponse.user.account, "estate": this.loginResponse.user.estateName });
        this.acceptAgreement(this.current_signature++, total_signatures);
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

  saveAllSignatures(signatureArray) {
    console.log(signatureArray);
    this.loadingService.showLoading();
    this.dataService.postData("saveSignature", { "signatures": signatureArray, "meeting_id": this.meeting_details.meeting_id }, {}).subscribe(results => {
      console.log(results);
      if (results.success == true) {
        this.loginResponse.user.proxyAppointed.push(this.meeting_details.meeting_id);
        localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
        this.openThankYouNote();
        this.loadingService.hideLoading();
      }
      else {
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(results.message);
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to save signatures, please try again.");
    });
  }

  expandPoll(poll_details: any) {
    poll_details.show = !poll_details.show;
  }

  toggleGroup(poll_details: any) {
    poll_details.show = !poll_details.show;
  }

  isGroupShown(poll_details: any) {
    return poll_details.show;
  }


  getHKIDByOption(poll_details, current_HKID, selected_option) {
    let request_data: any = {};
    console.log("poll_details", poll_details);
    console.log("option_details", selected_option);
    this.total_HKIDs = this.loginResponse.user.numberOfOwners;
    let myModal4 = this.modalCtrl.create("OwnerHkidNumber", {
      "total_HKIDs": this.total_HKIDs,
      "current_HKID": this.current_HKID
    });
    myModal4.onDidDismiss(data => {
      console.log(data);
      if (!data || typeof data == "undefined") {
        return false;
      }
      else if (data.closeType == "submitted") {
        /* this.getHKIDByOption(); */
        this.HKIDArray.push(data.hkid_val);
        request_data = {
          "pollID": poll_details._id,
          "option": selected_option,
          "account": this.loginResponse.user.account,
          "estate": poll_details.estateName,
          "meeting_id": this.meeting_details._id,
          "HKID": this.HKIDArray
        };
        console.log("request_data", request_data);
        this.saveVoteData(request_data, poll_details);
      }
      else if (data.closeType == "repeat") {
        this.HKIDArray.push(data.hkid_val);
        this.getHKIDByOption(poll_details, this.current_HKID++, selected_option);
      }
      else {
      }

    });
    myModal4.present();
  }

  checkIfproxyAppointed(loginResponse) {
    let proxyAppointed = loginResponse.user.proxyAppointed;
    proxyAppointed.forEach(element => {
      if (this.meeting_details.meeting_id == element) {
        this.is_license_accepted = true;
        return;
      }
    });
    this.checkIfVoted(this.meeting_details.meeting_polls, loginResponse);
  }

  checkIfVoted(pollsArray, loginResponse) {
    pollsArray.forEach(function (element, i) {
      let votedArray = element.voted;
      votedArray.forEach(votedElement => {
        console.log(votedElement);
        if (loginResponse.user._id == votedElement) {
          console.log("VOTED TRUE");
          pollsArray[i].is_complete = true;
        }
      });
    });
  }

  saveVoteData(request_data, poll_details) {
    this.loadingService.showLoading();
    this.dataService.postData("vote", request_data, {}).subscribe(results => {
      console.log(results);
      this.HKIDArray = [];
      if (results.success == true) {
        poll_details.is_complete = true;
        this.current_HKID = 1;
        this.openThankYouNote2();
        this.loadingService.hideLoading();
      }
      else {
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(results.message);
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to save HKIDs, please try again.");
    });
  }

  openMeetingURL() {
    this.youtube.openVideo('6jiNS_4CEug');
  }

  openAgendaFile(agenda_details) {
    console.log(agenda_details);
    let file_details = agenda_details;
    const options: DocumentViewerOptions = {
      print: { enabled: false },
      bookmarks: { enabled: false },
      email: { enabled: false },
      title: file_details.name
    };
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = file_details.url;
    fileTransfer.download(url, this.file.dataDirectory + file_details.name).then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.document.viewDocument(this.file.dataDirectory + file_details.name, "application/pdf",
        options, onShow, onClose, onMissingApp, onError);
    }, (error) => {
      console.log(error);
      // handle error
    });

    function onShow() {
      window.console.log('document shown');
      //e.g. track document usage
    }

    function onClose() {
      window.console.log('document closed');
      //e.g. remove temp files
    }

    function onMissingApp(appId, installer) {
      if (confirm("PDF viewer not available on your device, Do you want to install the free PDF Viewer App to view this document?")) {
        installer();
      }
    }
    function onError(error) {
      window.console.log(error);
      alert("Sorry! Cannot view document.");
    }

  }

  openThankYouNote2() {
    let myModal5 = this.modalCtrl.create("ThankYouNote2");
    myModal5.onDidDismiss(data => {
      /* this.is_license_accepted = true; */
    });
    myModal5.present();
  }

}