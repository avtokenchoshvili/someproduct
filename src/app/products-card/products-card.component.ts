import { Component, OnInit ,Input} from '@angular/core';
import { Categories } from '../models/categories/categories.model';
import { Products } from '../models/products/products.model';
import { ServisesService } from '../servises.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {

  constructor(private servise:ServisesService) { }

  productList:Products[] = [];
  arrya:Categories[] = []; 

  ngOnInit(): void {

    this.servise.get().subscribe((response:any) =>{
      this.productList = response;
     
          }) 
      
     
      
      

  }

  




}
