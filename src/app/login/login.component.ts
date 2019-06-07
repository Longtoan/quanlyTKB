import { Component, OnInit } from "@angular/core";
import { ConnectMySQLService } from "../connect-my-sql.service";
import { userLogin } from "../Data";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user;
  constructor(private ConnectAPI: ConnectMySQLService) {}

  ngOnInit() {
    
  }
  // login(){
  //   const result = this.ConnectAPI.Login().forEach((i)=>{
  //     if(i.username )
  //   })
    
  // }
}
