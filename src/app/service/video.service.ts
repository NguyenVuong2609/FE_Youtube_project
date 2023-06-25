import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Video} from "../model/Video";
import {VideoDTO} from "../model/VideoDTO";

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
  getCheckLikeVideo(id: number): Observable<any>{
    return this.httpClient.get(this.API_VIDEO + "/like/" + id)
  }
  actionLikeOrUnlikeVideo(id: number, video : Video): Observable<any>{
    return this.httpClient.put(this.API_VIDEO + "/like/" + id, video);
  }
  actionUpdateView(id: number): Observable<any>{
    return this.httpClient.get(this.API_VIDEO + "/view/" + id);
  }
  getRelatedVideo(id: number): Observable<any> {
    return this.httpClient.get(this.API_VIDEO + "/related/" + id);
  }
  createVideoService(video: VideoDTO): Observable<any>{
    return this.httpClient.post(this.API_VIDEO, video);
  }
}
