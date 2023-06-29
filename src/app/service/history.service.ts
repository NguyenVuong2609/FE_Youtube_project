import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {History} from "../model/History";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  // private API_HISTORY = environment.API_LOCAL + 'history';
  private API_HISTORY = environment.API_SERVER + 'history';
  constructor(private httpClient: HttpClient) { }
  createHistory(username: string): Observable<any>{
    return this.httpClient.post<any>(this.API_HISTORY,username);
  }
  getListVideoHistory(): Observable<any>{
    return this.httpClient.get(this.API_HISTORY);
  }
  actionAddVideoToHistory(id: number, history: History): Observable<any>{
    return this.httpClient.put(this.API_HISTORY + "/add/" + id, history);
  }
  actionRemoveVideoFromHistory(history: History): Observable<any>{
    return this.httpClient.put(this.API_HISTORY + "/remove", history);
  }
  getMyHistory(): Observable<any>{
    return this.httpClient.get(this.API_HISTORY + "/myhistory");
  }
}
