import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CategoryComponent } from './components/category/category.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full" ,component:BrandComponent},
  {path:"brands",component:BrandComponent},
  {path:"brands/getall",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"colors/getall",component:ColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"customers/getall",component:CustomerComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/getall",component:CarComponent},
  {path:"cars/getbrandid/:brandId",component:CarComponent},
  {path:"cars/getcolorid/:colorId",component:CarComponent},
  {path:"cars/getcardetailpage/:carId",component:CarDetailComponent},
  {path:"rentals",component:RentalComponent},
  {path:"rentals/getall",component:RentalComponent},
  {path:"category",component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
