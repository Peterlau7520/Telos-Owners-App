import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingService {

  loading: Loading;
  safeSvg: any;

  constructor(public http: Http, public loadingCtrl: LoadingController, private sanitizer: DomSanitizer) {
  }

  showLoading() {
    let svg = `<svg width="60" height="60" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#00bee4">
    <g fill="none" fill-rule="evenodd" stroke-width="2">
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r"
                begin="0s" dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                begin="0s" dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r"
                begin="-0.9s" dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                begin="-0.9s" dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite" />
        </circle>
    </g>
</svg>`;
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
    this.loading = this.loadingCtrl.create({
      /* content: 'Please wait', */
      /* dismissOnPageChange: true, */
      showBackdrop: false,
      spinner: 'hide',
      content: this.safeSvg,
      duration: 3000
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss().catch(() => { });
    /* this.loading.dismiss(); */
  }

}
