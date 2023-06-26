import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../../service/playlist.service";
import {TokenService} from "../../../service/token.service";
import {Playlist} from "../../../model/Playlist";
import {Video} from "../../../model/Video";

@Component({
  selector: 'app-myplaylist',
  templateUrl: './myplaylist.component.html',
  styleUrls: ['./myplaylist.component.css']
})
export class MyplaylistComponent implements OnInit{
  checkLogin = false;
  avatar ?: string;
  myPlaylist ?: Playlist[];
  videoList ?: Video[];
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
      this.avatar = this.tokenService.getAvatar();
      this.playlistService.getMyPlaylistService().subscribe(data =>{
        this.myPlaylist = data;
      })
    }
  }
  constructor(private playlistService: PlaylistService,
              private tokenService: TokenService,) {
  }

  renderVideo(id: any) {
    this.playlistService.getVideoListByPlaylistService(id).subscribe(data =>{
      this.videoList = data;
    })
  }
}
