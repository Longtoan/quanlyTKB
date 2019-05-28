import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { XepTkbComponent } from './xep-tkb/xep-tkb.component';
import { MoTkbComponent } from './mo-tkb/mo-tkb.component';
import { XoatkbComponent } from './xoatkb/xoatkb.component';
import { TkbTheoLopComponent } from './tkb-theo-lop/tkb-theo-lop.component';
import { TkbGiangVienComponent } from './tkb-giang-vien/tkb-giang-vien.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XepTkbComponent,
    MoTkbComponent,
    XoatkbComponent,
    TkbTheoLopComponent,
    TkbGiangVienComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
