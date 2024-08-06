import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dataJsonUrl = 'assets/data.json';

  private testmonialJsonUrl = 'assets/testmonial.json';

  private imagesJsonUrl = 'assets/images.json';



  constructor(private _HttpClient:HttpClient) { }

  getData():Observable<any>{
    return this._HttpClient.get(this.dataJsonUrl);
  }

  getTestmonial():Observable<any>{
    return this._HttpClient.get(this.testmonialJsonUrl);
  }

  handleRegister(data:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data);
  }

  getImages():Observable<any>{
    return this._HttpClient.get(this.imagesJsonUrl);
  }
}
