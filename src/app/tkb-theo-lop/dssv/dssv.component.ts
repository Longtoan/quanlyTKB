import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {hocsinh} from "../../Data"
import {ConnectMySQLService} from "../../connect-my-sql.service"
@Component({
  selector: 'app-dssv',
  templateUrl: './dssv.component.html',
  styleUrls: ['./dssv.component.scss']
})
export class DSSVComponent implements OnInit {
  hocsinh: hocsinh[];
  constructor(private _connectAPI: ConnectMySQLService) { 
    
  }

  ngOnInit() {
  }

}
