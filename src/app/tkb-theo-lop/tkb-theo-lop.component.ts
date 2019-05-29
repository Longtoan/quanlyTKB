import { Component, OnInit } from "@angular/core";
import { lop } from "../Data";
import { ConnectMySQLService } from "../connect-my-sql.service";
@Component({
  selector: "app-tkb-theo-lop",
  templateUrl: "./tkb-theo-lop.component.html",
  styleUrls: ["./tkb-theo-lop.component.scss"]
})
export class TkbTheoLopComponent implements OnInit {
  lop;
  constructor(private _connectAPI: ConnectMySQLService) {}

  ngOnInit() {

    this._connectAPI.getAllLop().subscribe((d: lop) => {
      this.lop = d;
    });
   
  }
}
