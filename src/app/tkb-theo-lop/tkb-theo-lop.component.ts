import { Component, OnInit } from "@angular/core";
import { lop, hocsinh } from "../Data";
import { ConnectMySQLService } from "../connect-my-sql.service";

@Component({
  selector: "app-tkb-theo-lop",
  templateUrl: "./tkb-theo-lop.component.html",
  styleUrls: ["./tkb-theo-lop.component.scss"]
})
export class TkbTheoLopComponent implements OnInit {
  lop;
  hocsinh;
  constructor(private _connectAPI: ConnectMySQLService) {
  }

  ngOnInit() {
    const result =  this._connectAPI.getAlllop().subscribe((d: lop) => {
      this.lop = d;
    });
    if(result) {
      this._connectAPI.getclasshs().subscribe((hs:hocsinh) => {
        this.hocsinh = hs.id_lop;
      })
    }
    
  }
  
  
}
