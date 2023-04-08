import { Component,OnInit } from '@angular/core';
import { WeatherServicesService } from 'src/services/weather-services.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather-App';
  city: string='';
  allWeatherData:any=[];
  cityName:string='Delhi'?'Delhi':this.city;
  response:any
  searchValue: any;
  constructor(
    private weatherService:WeatherServicesService,
    private http:HttpClient,
    private toast: ToastrService
    ){

  }


  ngOnInit()
  {
   this.getWeatherData(this.cityName);
  }

 getWeatherData(city:any)
  {

    this.weatherService.getWeather(city).subscribe((res:any)=>{
      if(res.cod =='200'){
        this.allWeatherData = res;
      } else{
        this.toast.error(res.message)  
      }
    },(error)=>{
      this.toast.error(error.error.message)
    })
    
  }

  searchCity(e:any){
    console.log(e);
    if(e.key=='Enter'){
      this.getWeatherData(e.target.value);
      (<HTMLInputElement>document.getElementById("searchValue")).value=''
      
    }
  }
  convert(data:any){
    let res:any =data-273.15
    return parseInt(res)

  }
}
