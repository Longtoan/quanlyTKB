import { Component, OnInit } from '@angular/core';
import { giaovien } from "../Data";
import {ConnectMySQLService} from "../connect-my-sql.service";
@Component({
  selector: 'app-tkb-giang-vien',
  templateUrl: './tkb-giang-vien.component.html',
  styleUrls: ['./tkb-giang-vien.component.scss']
})
export class TkbGiangVienComponent implements OnInit {
  giaovien;
  constructor(
    private _connectAPI: ConnectMySQLService
  ) { }

  ngOnInit() {
    this._connectAPI.getAllgiaovien().subscribe((gv: giaovien)=>{
      this.giaovien = gv;
    })
  }

}
