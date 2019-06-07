import { Component, OnInit } from '@angular/core';
import {giaovien,lop} from "../Data";
import {ConnectMySQLService} from "../connect-my-sql.service"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  giaovien;
  lop;
  constructor(private _connectAPI: ConnectMySQLService) { }

  ngOnInit() {
    this._connectAPI.getAllgiaovien().subscribe((gv: giaovien) => {
      this.giaovien = gv;
    });
    this._connectAPI.getAlllop().subscribe((d: lop) => {
      this.lop = d;
    });
  }

}
