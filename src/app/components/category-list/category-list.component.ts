import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  title:string | undefined;
  @Input() category: Category | undefined;
  //@Input() categories: Category[]= [];
  @Input() ingredients:Ingredient[] | undefined;
  iconPath:string = "/assests/dairy.png";

  ngOnInit(): void {
    this.ingredients = this.category?.ingredients;
    this.title = this.category?.title;
    //console.log(this.categories)
  }
  clickX(x:Ingredient){
    //TODO: remove just one
    this.ingredients = this.ingredients?.filter((obj)=> {return obj.index !== x.index});
    console.log("clicked");
    //alert(this.category?.title);
  }
}
