import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http:HttpClient) { }

  getWeather(city:string):Observable<Weather>
  {
    return this.http.get<Weather>(environment.apiBaseUrl+`${city}&appid=76c425f83d3dd4a696721e5d4d4cc3fe`,{
  })
  }
}
