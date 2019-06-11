export class lop {
  public id_lop: Number;
  public tenlop: String;
  public id_khoi: Number;
  
}
export class Mon {
  public id_mon: Number;
  public tenmon: String;
}
export class Khoi {
  public id_khoi: Number;
  public tenkhoi: String;
}
export class giaovien {
  public id_giaovien: Number;
  public tengv: String;
  public diachi: String;
  public email: String;
  public id_chuyenmon: Number;
}
export class hocsinh {
  public id_hocsinh: number;
  public tenhs: String;
  public id_lop: Number;
}
export class userLogin {
  public username: String;
  public password: String;
}

export const URL_API = "http://localhost:8080/timetable";
