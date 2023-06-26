import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Playlist} from "../model/Playlist";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private API_PLAYLIST = environment.API_LOCAL + 'playlist';

  constructor(private httpClient: HttpClient) {
  }

  createPlaylistService(playlist: Playlist): Observable<any> {
    return this.httpClient.post(this.API_PLAYLIST, playlist);
  }

  getMyPlaylistService(): Observable<any> {
    return this.httpClient.get(this.API_PLAYLIST + "/myplaylist");
  }

  actionAddOrRemoveVideoService(playlist: Playlist, videoId: number): Observable<any> {
    return this.httpClient.put(this.API_PLAYLIST + "/" + playlist.id + "/" + videoId, playlist);
  }
  getDetailPlaylistService(id: number): Observable<any>{
    return this.httpClient.get(this.API_PLAYLIST + "/" + id);
  }
  getVideoListByPlaylistService(id: number): Observable<any>{
    return this.httpClient.get(this.API_PLAYLIST + "/myplaylist/" + id);
  }
}
