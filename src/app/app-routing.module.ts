import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MoTkbComponent } from "./mo-tkb/mo-tkb.component";
import { TkbGiangVienComponent } from "./tkb-giang-vien/tkb-giang-vien.component";
import { TkbTheoLopComponent } from "./tkb-theo-lop/tkb-theo-lop.component";
import { XepTkbComponent } from "./xep-tkb/xep-tkb.component";
import { XoatkbComponent } from "./xoatkb/xoatkb.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {path: "", component: HomeComponent},
  { path: "moTkb", component: MoTkbComponent },
  { path: "tkbGiangvien", component: TkbGiangVienComponent },
  { path: "tkbTheoLop", component: TkbTheoLopComponent },
  { path: "xepTkb", component: XepTkbComponent },
  { path: "xoaTkb", component: XoatkbComponent },
  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
