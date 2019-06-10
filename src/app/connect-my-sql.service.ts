import { Injectable } from "@angular/core";
import { URL_API } from "./Data";
import { HttpClient } from "@angular/common/http";
import { giaovien } from "./Data";
@Injectable({
  providedIn: "root"
})
export class ConnectMySQLService {
  url = URL_API;
  constructor(private _httpClient: HttpClient) {}
  // get thông tin lop

  getAllgiaovien() {
    return this._httpClient.get(`${this.url}/read_giaovien.php `);
  };
  getAlllop() {
    return this._httpClient.get(`${this.url}/read_khoi.php`);
  };
  
  getIDCLASS(id_lop:number) {
    return this._httpClient.get(`${this.url}/read_class_hs.php?id_lop=${id_lop}`);
  };
  getchuyenmon() {
    return this._httpClient.get(`${this.url}/read_chuyenmon.php`);
  };
  getkhoi() {
    return this._httpClient.get(`${this.url}/read_khoi.php`);
  };

  saveGiaovien(giaovien) {
    return this._httpClient.post(`${this.url}/add_giaovien.php`, JSON.stringify(giaovien));
  };
  delGiaoVien(id_giaovien:number){
    return this._httpClient.get(`${this.url}/delete_giaovien.php?id_giaovien=${id_giaovien}`);
  }
  Login() {
    return this._httpClient.get(`${this.url}/read_userLogin.php`);
  };
}
