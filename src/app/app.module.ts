import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilAppService } from './util.app.service';
import { UtilService } from './util.service';
import { APP_CONFIG, BaseAppConfig } from "./util.app.config";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: '__appdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']}), 
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilService,
    UtilAppService,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: APP_CONFIG, useValue: BaseAppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
