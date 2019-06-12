import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { hocsinh } from "../../Data";
import { ConnectMySQLService } from "../../connect-my-sql.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-dssv",
  templateUrl: "./dssv.component.html",
  styleUrls: ["./dssv.component.scss"]
})
export class DSSVComponent implements OnInit {
  hocsinh;
  constructor(
    private _connectAPI: ConnectMySQLService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params["id"];
      this._connectAPI.getIDCLASS(id).subscribe(data => {
        this.hocsinh = data;
      });
    });
  }

}
