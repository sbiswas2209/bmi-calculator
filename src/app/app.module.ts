import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BmiPage } from '../pages/bmi/bmi';
import { BmiProvider } from '../providers/bmi/bmi';


@NgModule({
  declarations: [
    MyApp,
    BmiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,BmiPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BmiProvider,
    {provide: [ErrorHandler], useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
