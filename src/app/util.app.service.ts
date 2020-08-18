import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import {APP_CONFIG, AppConfig} from "./util.app.config";
import { DataModel } from "./data.model";

@Injectable({
  providedIn: 'root'
})
export class UtilAppService {

  private httpHeaders = new HttpHeaders()
   .set('Access-Control-Allow-Origin', '*')
   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");
  
   private options = {
    headers: this.httpHeaders
  };

  constructor(@Inject(APP_CONFIG) private config:AppConfig,private http: HttpClient,) { }

  startbase(): Observable<DataModel> {
        let fm = new FormData()
        fm.append('s','session')
        fm.append('a','sessioncreate')
        fm.append('m','l')
      return this.http.post<DataModel>(this.config.apiBase,fm,{});
  }


  get(data:any): Observable<DataModel> {
    let bd = this.formatpost(data);
    return this.http.post<DataModel>(this.config.apiBase,bd,{})
  }


  send(data:any,url:any): Observable<DataModel> {
    let bd = this.formatpost(data);
    return this.http.post<DataModel>(this.config.apiBase+url,bd,this.options)
  }
  
  formatpost(data:any){
    var fm = new FormData(),props={};
    for (var key in data) {   
      console.log(data[key]);
       
      fm.append(key,data[key]);
      props[key]= key.substr(key.length-1);
    }
    return fm;
  }
  
}
