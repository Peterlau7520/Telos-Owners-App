import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public token: any;
  constructor(public http: Http, public storage: Storage) {
 
  }
  signin(account: string, password: string){
    console.log(account, password);
  }
  login(credentials){
    // return new Promise((resolve, reject) => {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     this.http.post('http://telos-residents.herokuapp.com/login', JSON.stringify(credentials), {headers: headers})
    //       .subscribe(res => {
    //         let data = res.json();
    //         this.token = data.token;
    //         this.storage.set('token', data.token);
    //         resolve(data);
    //       }, (err) => {
    //         reject(err);
    //       });
 
    // });
 
  }
  

}
