import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORY = environment.API_LOCAL + "category";

  constructor(private httpClient: HttpClient) {
  }
  getListCategory(): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY);
  }
  createCategoryService(category: Category): Observable<any> {
    return this.httpClient.post<any>(this.API_CATEGORY, category);
  }
  getDetailCategory(id: number): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY + '/' + id)
  }
  updateCategory(id: number, category: Category): Observable<any>{
    return this.httpClient.put(this.API_CATEGORY + '/' + id, category);
  }
}
