import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
/* import { FileOpener } from '@ionic-native/file-opener'; */
/* import { InAppBrowser } from '@ionic-native/in-app-browser'; */
import { SignaturePadModule } from 'angular2-signaturepad';
import { ShowMessage } from '../providers/show-message';
import { LoadingService } from '../providers/loading-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignaturePadPage } from '../pages/signature-pad/signature-pad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignaturePadPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ""
    }),
    SignaturePadModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignaturePadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Camera,
    ShowMessage,
    LoadingService,
    /* FileOpener, */
    /* InAppBrowser, */
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
