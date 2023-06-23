import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private API_HISTORY = environment.API_LOCAL + 'history';
  constructor(private httpClient: HttpClient) { }
  createHistory(username: string): Observable<any>{
    return this.httpClient.post<any>(this.API_HISTORY,username);
  }
}
