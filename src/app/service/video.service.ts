import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private API_VIDEO = environment.API_LOCAL + 'video';

  constructor(private httpClient: HttpClient) {
  }
  getListVideoPageService(request: any): Observable<any>{
    const params = request;
    return this.httpClient.get(this.API_VIDEO + "/page", {params});
  }
  getVideoDetail(id: number): Observable<any>{
    return this.httpClient.get(this.API_VIDEO + "/" + id)
  }
}
