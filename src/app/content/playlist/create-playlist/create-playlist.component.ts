import {Component, OnInit} from '@angular/core';
import {Playlist} from "../../../model/Playlist";
import {PlaylistService} from "../../../service/playlist.service";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  ngOnInit(): void {
    this.protectSpam = false;
  }

  form: any = {};
  playlist?: Playlist;
  status = "";
  protectSpam ?: boolean;

  constructor(private playlistService: PlaylistService) {
  }

  createPlaylist() {
    this.playlist = new Playlist(this.form.name);
    if (this.protectSpam) {
      this.status = "Please wait a minute! Don't spam anymore!"
    } else {
      this.playlistService.createPlaylistService(this.playlist).subscribe(data => {
        if (data.message == 'not_login') {
          this.status = "Please login first!"
        } else {
          this.status = "Create success!"
          this.protectSpam = true;
          setTimeout(() => window.location.reload, 3000);
          window.location.reload();
        }
      })
    }
  }
}
