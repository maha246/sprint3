import { Component } from '@angular/core';
import { Category } from './models/category';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint3';

  categories:Category[] = [];
  dairy_product:string = "Milk  3 Caps";
  meat_product:string = "Meat  1 Kilo";
  fruit_product:string = "Banana  4";
  vegetables_product:string = "Tomato  4 ";


  dairy:Category | undefined;

  ngOnInit(): void {
    this.ingredientsInit();
    this.dairy = this.categories[0];
    //console.log(this.categories)
  }

  /*TODO: send to categore list*/
  ingredientsInit(){
    console.log ("initializing categories array");
    this.addCategory("Dairy");
    this.addCategory("Meat");
    this.addCategory("Fruit");
    this.addCategory("Vegetables");
  }

  addCategory(title:string){
    let c = new Category(this.categories.length, title);
    let ingredient = "";
    if(title == "Dairy") ingredient = this.dairy_product;
    else if(title == "Meat") ingredient = this.meat_product;
    else if(title == "Fruit") ingredient = this.fruit_product;
    else ingredient = this.vegetables_product;

    for(let i=0; i<5; i++){
      if(i==4){
        c.addIngredient(ingredient, 2, i);
      }
      else{
        c.addIngredient(ingredient, 1, i);
      }
    }
    this.categories.push(c);
  }
  
}
