import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  carDetail:Car;
  carImages: CarImage[] = [];
  constructor(private carDetailService:CarDetailService, private carImagesService:CarImagesService ,private activatedRoute:ActivatedRoute ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        this.getCarDetailPage(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
    })
  }

  getCarDetailPage(carId:number){
    this.carDetailService.getCarDetailPage(carId).subscribe((response)=>{
      this.carDetail = response.data;
    })
  }
  getCarImagesByCarId(carId:number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }
  getImagePath(carImage:CarImage):string {
    let url: string ="https://localhost:44376/uploads/images/" + carImage.imagePath
    console.log(carImage);
    return url;
  }
}
