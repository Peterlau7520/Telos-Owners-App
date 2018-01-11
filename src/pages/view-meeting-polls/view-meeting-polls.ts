import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { SignaturePadPage } from '../../pages/signature-pad-page/signature-pad-page';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import * as moment from 'moment';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';
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
  token: any = "";

  constructor(public element: ElementRef, public renderer: Renderer, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    private youtube: YoutubeVideoPlayer,
    private transfer: FileTransfer,
    private file: File,
    private document: DocumentViewer,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    private alertCtrl: AlertController) {
    this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
    this.poll_list = this.meeting_details.meeting_polls;
    let date = moment(this.meeting_details.meeting_pollEndTime);
    let now = moment();

    console.log(date);
    console.log(now);

    if (now > date) {
      // date is past
      this.is_license_accepted = true;
      console.log("NOW is GRATER than POLL END TIME");
    }
    this.checkIfproxyAppointed(this.loginResponse);
    console.log(this.meeting_details);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMeetingPolls');
    /* this.initParallax(); */
  }

  ionViewWillEnter() {
    console.log('ionViewDidEnter ViewMeetingPolls');
  }


  /* Start Parallax */
  /* initParallax() {
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
  } */
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
          /* this.acceptAgreement(this.current_signature, this.total_signatures); */
          this.getAllHKIDs(this.current_HKID);
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
        this.total_signatures = this.loginResponse.user.numberOfOwners;
        this.current_signature = 1;
        /* this.acceptAgreement(this.current_signature, this.total_signatures); */
        this.getAllHKIDs(this.current_HKID);
      }
      else {
      }
    });
    myModal1.present();
  }

  acceptAgreement(current_signature, total_signatures, HKIDArray) {
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
        console.log(HKIDArray);
        /* this.openThankYouNote(); */
        this.saveAllSignatures(this.signatureArray, HKIDArray);
      }
      else if (data.closeType == "outside") {
        this.HKIDArray = [];
        this.current_HKID = 1;
      }
      else {
        this.signatureArray.push({ "image": data.signatureData, "account": this.loginResponse.user.account, "estate": this.loginResponse.user.estateName });
        this.acceptAgreement(this.current_signature++, total_signatures, this.HKIDArray);
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

  saveAllSignatures(signatureArray, HKIDArray) {
    console.log(signatureArray);
    this.loadingService.showLoading("my-loading-class");
    this.dataService.postData("saveSignature", { "signatures": signatureArray, "hkid": HKIDArray, "meeting_id": this.meeting_details.meeting_id }, {
      headers: {
        'authorization': this.token
      }
    }).subscribe(results => {
      console.log(results);
      this.current_HKID = 1;
      if (results.success == true) {
        this.loginResponse.user.proxyAppointed.push(this.meeting_details.meeting_id);
        localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
        this.openThankYouNote();
        this.loadingService.hideLoading();
      }
      else {
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(results.message);
        if (results.message == "Invalid token" || results.message == "Please login") {
          this.navCtrl.setRoot(HomePage);
        }
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("無法儲存簽名 | Unable to save signatures, please try again.");
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

  getAllHKIDs(current_HKID) {
    let request_data: any = {};
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
          "account": this.loginResponse.user.account,
          "meeting_id": this.meeting_details.meeting_id,
          "HKID": this.HKIDArray
        };
        console.log("request_data", request_data);
        this.total_signatures = this.loginResponse.user.numberOfOwners;
        this.current_signature = 1;
        this.acceptAgreement(this.current_signature, this.total_signatures, this.HKIDArray);
        /* this.saveVoteData(request_data, poll_details, selected_option); */
      }
      else if (data.closeType == "repeat") {
        this.HKIDArray.push(data.hkid_val);
        this.getAllHKIDs(this.current_HKID++);
      }
      else {
      }

    });
    myModal4.present();
  }


  saveVotingData(poll_details, selected_option) {
    console.log("poll_details, selected_option", poll_details, selected_option);
    let date = moment(this.meeting_details.meeting_pollEndTime);
    let now = moment();
    if (poll_details.is_complete == true) {
      return false;
    }
    else if (now > date) {
      this.showMessage.showToastBottom("抱歉，投票截止時間已過，请参加大会进行投票！| Sorry, you have missed the poll deadline, please attend the meeting in person and vote !");
      return false;
    }
    else {
      let request_data: any = {};
      request_data = {
        "pollID": poll_details._id,
        "option": selected_option.label,
        "account": this.loginResponse.user.account,
        "estate": poll_details.estateName,
        "meeting_id": this.meeting_details.meeting_id,
        /* "HKID": this.HKIDArray */
      };

      let alert = this.alertCtrl.create({
        title: 'Confirm option',
        message: '確認該選項 ？| Are you sure you want to select this option ?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Yes clicked');
              this.saveVoteData(request_data, poll_details, selected_option);
            }
          }
        ]
      });
      alert.present();
    }
  }

  checkIfproxyAppointed(loginResponse) {
    let proxyAppointed = loginResponse.user.proxyAppointed;
    proxyAppointed.forEach(element => {
      if (this.meeting_details.meeting_id == element) {
        this.is_license_accepted = true;
        return;
      }
    });
    this.meeting_details.meeting_polls.forEach(poll => {
      poll.options.forEach(function (option_details, k) {
        poll.options[k] = { "label": option_details, choice: false };
      });
    });
    this.checkIfVoted(this.meeting_details.meeting_polls, loginResponse);
  }

  checkIfVoted(pollsArray, loginResponse) {
    pollsArray.forEach(function (pollElement, i) {
      let tmp_options = [];
      console.log(pollElement.options);
      console.log(tmp_options);
      let votedArray = pollElement.voted;
      votedArray.forEach(votedElement => {
        console.log(votedElement);
        if (loginResponse.user._id == votedElement) {
          console.log("VOTED TRUE");
          pollsArray[i].is_complete = true;
          console.log("VOTED TRUE");
          pollsArray[i].is_complete = true;
          pollElement.options.forEach(optionElement => {
            pollElement.votingResults.forEach(votingObj => {
              console.log(pollElement.votingResults);
              if (votingObj.resident == loginResponse.user._id) {
                if (votingObj.choice == optionElement.label) {
                  tmp_options.push({ "label": optionElement.label, choice: true });
                }
                else {
                  tmp_options.push({ "label": optionElement.label, choice: false });
                }
              }
              else {
              }
              pollElement.options = tmp_options;
            });
          });
        }
        else {

        }
      });
    });
  }

  saveVoteData(request_data, poll_details, selected_option) {
    console.log(poll_details);
    this.loadingService.showLoading("my-loading-class");
    this.dataService.postData("vote", request_data, {
      headers: {
        'authorization': this.token
      }
    }).subscribe(results => {
      console.log(results);
      this.HKIDArray = [];
      this.current_HKID = 1;
      if (results.success == true) {
        poll_details.is_complete = true;
        this.current_HKID = 1;
        /* poll_details.votingResults = {};
        poll_details.votingResults.choice = ""; */
        selected_option.choice = true;
        this.openThankYouNote2();
        this.loadingService.hideLoading();
      }
      else {
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(results.message);
        if (results.message == "Invalid token" || results.message == "Please login") {
          this.navCtrl.setRoot(HomePage);
        }
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("無法儲存hkids | Unable to save HKIDs, please try again.");
    });
  }

  openMeetingURL(videoID) {
    console.log(videoID);
    this.youtube.openVideo(videoID);
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