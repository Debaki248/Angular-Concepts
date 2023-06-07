import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Main } from '../models/WeatherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }
  getWeather():Observable<Main>{
    return this.http.get<Main>("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9c2077098b2888f64de1e74ad64321ca");
  }
}
