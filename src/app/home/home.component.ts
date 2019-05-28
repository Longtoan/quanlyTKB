import { Component, OnInit } from '@angular/core';
import { lop} from '../Data';
import { ConnectMySQLService} from '../connect-my-sql.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lop;
  constructor(
    private _connectAPI: ConnectMySQLService
  ) { }

  ngOnInit() {

    this._connectAPI.getAllLop().subscribe((d:lop)=>{
      this.lop=d;
    })
  }

}
