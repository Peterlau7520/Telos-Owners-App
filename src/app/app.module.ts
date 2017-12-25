import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Device } from '@ionic-native/device';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Camera } from '@ionic-native/camera';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { SignaturePadModule } from 'angular2-signaturepad';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { OneSignal } from '@ionic-native/onesignal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ShowMessage } from '../providers/show-message';
import { LoadingService } from '../providers/loading-service';
import { DataService } from '../providers/data-service';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignaturePadPage } from '../pages/signature-pad-page/signature-pad-page';
import { AuthProvider } from '../providers/auth/auth';
import { MeetingsProvider } from '../providers/meetings/meetings';
import { NoticesProvider } from '../providers/notices/notices';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignaturePadPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ""
    }),
    IonicStorageModule.forRoot(),
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
    Device,
    HttpModule,
    Camera,
    LocalNotifications,
    YoutubeVideoPlayer,
    InAppBrowser,
    ShowMessage,
    LoadingService,
    DataService,
    FileOpener,
    File,
    FileTransfer,
    DocumentViewer,
    ScreenOrientation,
    OneSignal,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    MeetingsProvider,
    NoticesProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
