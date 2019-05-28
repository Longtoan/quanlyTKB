import { Injectable } from '@angular/core';
import { lop, URL_API} from './Data';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectMySQLService {
  url=URL_API;
  constructor(
    private _httpClient : HttpClient
  ) { }
  getAllLop(){
    return this._httpClient.get(`${this.url}/read_class.php`);
  }
}
