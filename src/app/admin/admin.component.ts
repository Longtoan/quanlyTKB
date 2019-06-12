import { Component, OnInit } from "@angular/core";
import { giaovien, lop, Mon, Khoi } from "../Data";
import { ConnectMySQLService } from "../connect-my-sql.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  formGV: giaovien;
  formLop: lop;
  formMon: Mon;
  giaovien;
  lop;
  Mon;
  khoi;
  chuyenmon: String = "";
  tenkhoi: String = "";
  tenmon: String = "";
  constructor(private _connectAPI: ConnectMySQLService) {}
  // save giáo viên
  Savegv() {
    this.formGV.id_giaovien = null;
    let arrtam = this.chuyenmon.split(".");
    this.formGV.id_chuyenmon = Number(arrtam[0]);
    console.log(this.formGV);
    this._connectAPI.saveGiaovien(this.formGV).then(data => {
      
      this.dGiaoVien();
    });
    // console.log(this.formGV)
  }
  // save Lop
  saveLop() {
    console.log(this.formLop)
    this.formLop.id_lop = null;
    let arr = this.tenkhoi.split(".");
    this.formLop.id_khoi = Number(arr[0]);
    console.log(this.formLop);
    
    this._connectAPI.saveLop(this.formLop).then(data => {
      
      this.dLop();
     
    });
  }
  //delete Giáo viên
  delGiaovien(id_giaovien) {
    this._connectAPI.delGiaoVien(id_giaovien).subscribe(data => {
      if (data) {
        this.dGiaoVien();
      }
    });
  }
  //delete Lớp
  delLop(id_lop) {
    this._connectAPI.delLop(id_lop).subscribe(i => {
      if (i) {
        this.dLop();
      }
      console.log(i);
    });
  }
  //list danh sách Giáo viên
  dGiaoVien() {
    this._connectAPI.getAllgiaovien().subscribe((d: giaovien) => {
      this.giaovien = d;
    });
  }
  // list danh sach lop
  dLop() {
    this._connectAPI.getAlllop().subscribe((d: lop) => {
      this.lop = d;
    });
  }
  // list danh sach môn
  dMon() {
    this._connectAPI.getchuyenmon().subscribe((cm: Mon) => {
      this.Mon = cm;
    });
  }
  // list danh sach khoi
  dKhoi() {
    this._connectAPI.getkhoi().subscribe((k: Khoi) => {
      this.khoi = k;
    });
  }
  ngOnInit() {
    this.dGiaoVien();
    this.dKhoi();
    this.dLop();
    this.dMon();
    this.formGV = new giaovien();
    this.formLop = new lop();
  }
}
