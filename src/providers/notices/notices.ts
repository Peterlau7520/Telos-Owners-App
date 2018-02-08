import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 
import 'rxjs/add/operator/map';
/*
  Generated class for the NoticesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticesProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello NoticesProvider Provider');
  }
  
  getNotices(){
    // return new Promise((resolve, reject) => {
    //   //Load token if exists
    //     this.storage.get('token').then((value) => {
    //     this.token = value;
    //     let headers = new Headers();
    //     headers.append('Authorization', this.token);
    //     this.http.get('http://telos-residents.herokuapp.com/getPolls', {headers: headers})
    //           .subscribe(res => {
    //             let data = res.json();
    //             console.log(data);
    //             resolve(data);
    //           }, (err) => {
    //               reject(err);
    //           });
    //         })
    //       });
    
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/noticeBoard')
      .subscribe(res => {
        let data = res.json();
        resolve(data);
      }, (err) => {
          reject(err);
      });
          });
  }

}
