import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../ngrx/weather-service.service';
import { Main } from '../models/WeatherModel';
import{ Store,select } from '@ngrx/store';
import * as newUserActions from '../user.actions';
import * as fromUser from '../user.selectors';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData:Main={
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0
  };
  errorMessage: String;
  constructor(private weatherService:WeatherServiceService,private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new newUserActions.LoadUsers);
    this.store.pipe(select(fromUser.getUser)).subscribe(
      (weather:any) => {
       weather = this.weatherData
      }
    )
    this.store.pipe(select(fromUser.getError)).subscribe(
      (err) => {
       this.errorMessage = err;
      }
    )
    /*
    this.weatherService.getWeather().subscribe({
      next:(response)=>{
        this.weatherData = response;
      }
    })
    */
  }


}


