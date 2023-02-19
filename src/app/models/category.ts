import { Ingredient } from "./ingredient";
export class Category {
    public title: string; // public property
    public ingredients:Ingredient[] = [];
  
    constructor(index: number,title: string) {
      this.title = title;
    }
  
    addIngredient(name:string, week:number, index:number){
      let x = new Ingredient(this.ingredients.length, name, week);
      x.setIndex(index);
      this.ingredients.push(x);
    }
  
    // public method
    printUserInfo() {
      console.log(`category: ${this.title}`);
    }
  }