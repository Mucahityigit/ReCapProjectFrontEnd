import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
 categories = ["brands","colors","customers","cars","rentals"];
 currentCategory:string;
 setCurrentCategory(category:string){
    this.currentCategory = category;
 }

 getCurrentCategoryClass(category:string){
    if(category == this.currentCategory){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
 }
}
