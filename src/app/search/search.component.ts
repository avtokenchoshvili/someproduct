
import { EventEmitter,Output,Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories/categories.model';
import { Products } from '../models/products/products.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Input()
 someArray!:Observable<Products[]>;
 public term!:string
  constructor() { }

  ngOnInit(): void {
  }
}


