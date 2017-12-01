import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/* @IonicPage() */
@Component({
  selector: 'page-signature-pad',
  templateUrl: 'signature-pad.html',
})
export class SignaturePadPage {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  public signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 0.5,
    /* 'canvasWidth': 400,
    'canvasHeight': 200, */
    'backgroundColor': '#ffffff',
    'penColor': '#000000'
  };

  total_signatures: any;
  current_signature: any;
  signature = '';
  isDrawing = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.total_signatures = this.navParams.get("signatures");
    this.current_signature = this.navParams.get("current_signature");
    console.log(this.total_signatures);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePad');
  }

  /* canvasResize() {
    let canvas = document.querySelector('canvas');
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
  }
 */
  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  saveSignature() {
    this.signature = this.signaturePad.toDataURL();
    console.log(this.signature);
    this.signaturePad.clear();
    if (this.current_signature >= this.total_signatures) {
      console.log("IF");
      this.viewCtrl.dismiss();
      let myModal = this.modalCtrl.create("ThankYouNote");
      myModal.present();
      return false;
    }
    else {
      console.log("else");
      this.current_signature++;
      let myModal = this.modalCtrl.create(SignaturePadPage, {
        "signatures": this.total_signatures,
        "current_signature": this.current_signature
      });
      myModal.present();
    }
    this.viewCtrl.dismiss();
  }

  clearPad() {
    this.signaturePad.clear();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
