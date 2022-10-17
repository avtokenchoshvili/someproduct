import { Categories } from "../categories/categories.model";


export class Products {


    Id!: number;
    Name!: "string";    
    ShortDescription!: string;
    LongDescription!:string; 
    MainImageUrl!: string;
    OtherCategories = Categories;
  


}
