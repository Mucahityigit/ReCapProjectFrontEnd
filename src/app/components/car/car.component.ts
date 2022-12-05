import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  cars:Car[] = []; 
  constructor(private carService:CarService){}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars = response.data;
    });
  }
}