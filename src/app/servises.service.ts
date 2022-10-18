import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Categories } from './models/categories/categories.model';
import { Products } from './models/products/products.model';
@Injectable({
  providedIn: 'root'
})
export class ServisesService {
  //

  constructor(private http: HttpClient) { }



 public get(): Observable<Products[]> {
    let baseUrl: string = `${environment.serverBaseUrl}`;
    return this.http.get<Products[]>(baseUrl);
  }

  public getProductById(): Observable<Categories> {
    var apiUrl = `https://europroductcms.azurewebsites.net/api/productcategory?fbclid=IwAR0BBG-MpGhnf_xpFfs5gfljahtPw53ILqcZsTxpBFQCfGCoyj4NGA_GqBo/$`;
    return this.http.get<Categories>(apiUrl) as Observable<Categories>;
  }
}