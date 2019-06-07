import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { XepTkbComponent } from "./xep-tkb/xep-tkb.component";
import { MoTkbComponent } from "./mo-tkb/mo-tkb.component";
import { TkbTheoLopComponent } from "./tkb-theo-lop/tkb-theo-lop.component";
import { TkbGiangVienComponent } from "./tkb-giang-vien/tkb-giang-vien.component";
import { LoginComponent } from "./login/login.component";

import { HttpClientModule } from "@angular/common/http";
import { DSSVComponent } from './tkb-theo-lop/dssv/dssv.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XepTkbComponent,
    MoTkbComponent,
    TkbTheoLopComponent,
    TkbGiangVienComponent,
    LoginComponent,
    DSSVComponent,
    AdminComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
