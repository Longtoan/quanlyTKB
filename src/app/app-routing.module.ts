import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MoTkbComponent } from "./mo-tkb/mo-tkb.component";
import { TkbGiangVienComponent } from "./tkb-giang-vien/tkb-giang-vien.component";
import { TkbTheoLopComponent } from "./tkb-theo-lop/tkb-theo-lop.component";
import { XepTkbComponent } from "./xep-tkb/xep-tkb.component";
import { LoginComponent } from "./login/login.component";
import { DSSVComponent } from "./tkb-theo-lop/dssv/dssv.component";
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path: "", redirectTo: "moTkb", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "moTkb", component: MoTkbComponent },
  { path: "tkbGiangvien", component: TkbGiangVienComponent },
  { path: "xepTkb", component: XepTkbComponent },
  { path: "login", component: LoginComponent },
  { path: "tkbTheoLop", component: TkbTheoLopComponent },
  { path: "dshs", component: DSSVComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
