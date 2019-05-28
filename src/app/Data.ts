

export class lop{
    id_lop:Number;
    tenlop:String;
}
export class Mon {
    id_mon: Number;
    tenmon: String;
}
export class giaovien{
    id_giaovien: number;
    tengv: String;
    ngaysinh: Date;
    phai: boolean;
    diachi: String;
    mail: String;
    chuyenmon: String;

}   
export class hocsinh{
    id_hocsinh: number;
    tenhs: String;
    id_lop: Number;

}

export const URL_API= "http://localhost:8080/sitetimetable";