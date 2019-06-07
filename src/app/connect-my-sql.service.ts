import { Injectable } from "@angular/core";
import {  URL_API } from "./Data";
import { HttpClient } from "@angular/common/http";
import { giaovien} from './Data';
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
    return this._httpClient.get(`${this.url}/read_class_hs.php`);
  }
  getchuyenmon(){
    return this._httpClient.get(`${this.url}/read_chuyenmon.php`);
  };
  getkhoi(){
    return this._httpClient.get(`${this.url}/read_khoi.php`);
  }
  saveGiaovien(){
    return this._httpClient.post(`${this.url}/add_giaovien.php`,
    {tengv:"anhvu",ngaysinh:"1",diachi:"123",email:"anhvu@gmail.com",id_chuyenmon:2});
  }

  Login(){
    return this._httpClient.get(`${this.url}/read_userLogin.php`);
  }
}
