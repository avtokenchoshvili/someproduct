import { Component, OnInit } from '@angular/core';
import { concatMap,filter,map,mergeMap,mergeAll} from 'rxjs/operators';
import { Categories } from '../models/categories/categories.model';
import { Products } from '../models/products/products.model';
import { ServisesService } from '../servises.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 arrya:Categories[] = [];  
  constructor(private servise:ServisesService) { }

  ngOnInit(): void {
    this.servise.getProductById().subscribe((response:any) => { 
      this.arrya = response
      console.log(this.arrya)
      
    })


this.servise.getProductById().pipe(map(arrya => this.arrya.filter(Categories =>Categories.Id > 30))).subscribe((response) => {
  console.log(response)
 })

  }




}
