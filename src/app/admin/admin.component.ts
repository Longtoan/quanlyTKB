import { Component, OnInit } from '@angular/core';
import {giaovien,lop,Mon,Khoi} from "../Data";
import {ConnectMySQLService} from "../connect-my-sql.service"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  formGV:giaovien;
  formLop: lop;
  giaovien;
  lop;
  Mon;
  khoi;
   chuyenmon:String="";
  constructor(private _connectAPI: ConnectMySQLService) { }

  btn_Save(){
    this.formGV.id_giaovien=null;
    this.formGV.ngaysinh="";
    let arrtam=this.chuyenmon.split('.');
    this.formGV.id_chuyenmon=Number(arrtam[0]);
    console.log(this.formGV);

    this._connectAPI.saveGiaovien().subscribe(d=>{
      console.log(d)
    })

    //console.log(this.chuyenmon)
  }
  

  ngOnInit() {
    this.formGV=new giaovien();
    
    this._connectAPI.getAllgiaovien().subscribe((gv: giaovien) => {
      this.giaovien = gv;
    });
    this._connectAPI.getAlllop().subscribe((d: lop) => {
      this.lop = d;
    });
    this._connectAPI.getchuyenmon().subscribe((cm:Mon)=>{
      this.Mon = cm

    });
    this._connectAPI.getkhoi().subscribe((k: Khoi)=>{
      this.khoi = k;
    })
  }

}
