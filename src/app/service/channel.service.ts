import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Channel} from "../model/Channel";
import {ChannelDTO} from "../model/ChannelDTO";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  // private API_CHANNEL = environment.API_LOCAL + 'channel';
  private API_CHANNEL = environment.API_SERVER + 'channel';

  constructor(private httpClient: HttpClient) {
  }

  getChannelDetail(id: number): Observable<any> {
    return this.httpClient.get(this.API_CHANNEL + "/" + id)
  }

  getMyChannel(): Observable<any> {
    return this.httpClient.get(this.API_CHANNEL + "/mychannel");
  }
  getAllVideoOfMyChannel(id: number):Observable<any>{
    return this.httpClient.get(this.API_CHANNEL + "/" + id + "/videos")
  }
  getSubscriberList(id: number): Observable<any>{
    return this.httpClient.get(this.API_CHANNEL + "/subscriber/" + id);
  }

  getCheckFollower(id: number): Observable<any> {
    return this.httpClient.get(this.API_CHANNEL + "/follow/" + id);
  }

  actionFollowOrUnfollowService(id: number, channel: Channel): Observable<any> {
    return this.httpClient.put(this.API_CHANNEL + "/follow/" + id, channel);
  }

  createChannelService(channel: ChannelDTO): Observable<any> {
    return this.httpClient.post(this.API_CHANNEL, channel);
  }
}
