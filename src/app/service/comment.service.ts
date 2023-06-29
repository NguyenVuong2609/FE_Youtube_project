import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  // private API_VIDEO = environment.API_LOCAL + 'comment';
  private API_VIDEO = environment.API_SERVER + 'comment';
  constructor(private httpClient: HttpClient) {
  }
  actionPostCommentService(id: number, comment: any): Observable<any>{
    return this.httpClient.post(this.API_VIDEO + "/" + id, comment);
  }
  getListCommentService(id: number): Observable<any>{
    return this.httpClient.get(this.API_VIDEO + "/" + id);
  }
}
