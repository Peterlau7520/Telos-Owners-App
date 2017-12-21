import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  BASE_URL: any;
  constructor(public http: Http) {
    this.BASE_URL = "https://telos-residents.herokuapp.com/";
    //this.BASE_URL = "http://20924817.ngrok.io/";
  }

  token: any;
  response: any;

  getData(q, headers) {
    return this.http.get(this.BASE_URL + q, headers)
      .map((results) => results.json());
  }

  postData(q, object, headers) {
    return this.http.post(this.BASE_URL + q, object, headers)
      .map((results) => {
        if (results.status < 200 || results.status >= 300) {
          throw new Error('This request has failed ' + results.status);
        }
        else {
          return results.json();
        }
      }, (err) => {
        throw new Error('This request has failed' + err);
      });
  }

}