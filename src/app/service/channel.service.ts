import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private API_CHANNEL = environment.API_LOCAL + 'channel';

  constructor(private httpClient: HttpClient) { }
  getChannelDetail(id: number): Observable<any>{
    return this.httpClient.get(this.API_CHANNEL + "/" + id)
  }
  getMyChannel(): Observable<any>{
    return this.httpClient.get(this.API_CHANNEL + "/mychannel");
  }
}
