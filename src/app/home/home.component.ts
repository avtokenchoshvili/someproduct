import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories/categories.model';
import { Products } from '../models/products/products.model';
import { ServisesService } from '../servises.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(private servise:ServisesService) { }

  ngOnInit(): void {  


  }




}
