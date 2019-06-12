import { Component, OnInit } from "@angular/core";
import { lop, hocsinh } from "../Data";
import { ConnectMySQLService } from "../connect-my-sql.service";
import { Router} from '@angular/router';

@Component({
  selector: "app-tkb-theo-lop",
  templateUrl: "./tkb-theo-lop.component.html",
  styleUrls: ["./tkb-theo-lop.component.scss"]
})
export class TkbTheoLopComponent implements OnInit {
  lop;
  hocsinh;
  constructor(private _connectAPI: ConnectMySQLService, private router: Router) {
  }

  ngOnInit() {
      this._connectAPI.getAlllop().subscribe((d: lop) => {
      this.lop = d;
    });

  }
  readHS(){
    
  }
  showClassById(id){
    this.router.navigateByUrl(`dshs/${id}`)
    // this._connectAPI.getIDCLASS(id).subscribe(res =>{
      
    // })
  }
  // readclassid(id_lop){
  //   this._connectAPI.getIDCLASS(id_lop).subscribe((d:lop) =>{
      
  //       return this.router.navigate(['/dshs'], {queryParams:{page:1}});
        
      
  //   })
  // }
  
}
