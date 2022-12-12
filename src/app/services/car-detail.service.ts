import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44376/api/";
  
  constructor(private httpClient:HttpClient) { }
  getCarDetailPage(carId:number):Observable<CarDetailResponseModel>{
    let newPath = this.apiUrl + "cars/getcardetailpage?carId="+carId;
    return this.httpClient.get<CarDetailResponseModel>(newPath);
  }
}
