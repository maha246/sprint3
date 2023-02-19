export class Ingredient {
  public index:number;
  public name:string;
  public week:number;
  public checked:boolean;

  constructor(index: number,name_string: string, week:number){
    this.index= index;
    this.name = name_string;
    this.week = week;
    this.checked = false;
  }

  setIndex(idx:number){
    this.index=idx;
  }

  // public method
  printUserInfo() {
    console.log(`name: ${this.name}`);
  }
}