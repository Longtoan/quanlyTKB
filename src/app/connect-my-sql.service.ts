import { Injectable } from "@angular/core";
import {  URL_API } from "./Data";
import { HttpClient } from "@angular/common/http";
@Injectable(
  {
  providedIn: "root"
}
)
export class ConnectMySQLService {
  url = URL_API;
  constructor(private _httpClient: HttpClient) {}
  // get thông tin lop
  
  getAllgiaovien() {
    return this._httpClient.get(`${this.url}/read_giaovien.php `);
  }
  getAlllop(){
      
      return this._httpClient.get(`${this.url}/read_khoi.php`);
  
  }
  getclasshs(){
    return this._httpClient.get(`${this.url}/read_class_hs.php`)
  }
  Login(){
    return this._httpClient.get(`${this.url}/read_userLogin.php`);
  }
}
