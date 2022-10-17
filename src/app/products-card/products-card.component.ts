import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Categories } from '../models/categories/categories.model';
import { Products } from '../models/products/products.model';
import { ServisesService } from '../servises.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {

  constructor(
    private servise: ServisesService,
    private _router: ActivatedRoute
  ) { }

  productList$!: Observable<Products[]>;
  arrya: Categories[] = [];

  ngOnInit(): void {
    this.productList$ = this._router.queryParams.pipe(
      switchMap(params => {
        if (!params['catId']) return this.servise.get();
        return this.servise.get().pipe(
          map(res => res.filter(el => el.Id == params['catId']))
        )
      })
    )
  }
}
