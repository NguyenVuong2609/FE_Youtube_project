import {Component, OnInit} from '@angular/core';
import {Video} from "../../../model/Video";
import {ActivatedRoute, Router} from "@angular/router";
import {VideoService} from "../../../service/video.service";
import {TokenService} from "../../../service/token.service";
import {CommentService} from "../../../service/comment.service";
import {Comment} from "../../../model/Comment";
import {ChannelService} from "../../../service/channel.service";
import {Channel} from "../../../model/Channel";
import {PlaylistService} from "../../../service/playlist.service";
import {Playlist} from "../../../model/Playlist";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {HistoryService} from "../../../service/history.service";
import {History} from "../../../model/History";

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit {
  // @ts-ignore
  video = new Video();
  checkLike = false;
  checkFollow = false;
  checkLogin = false;
  nameUser = '';
  avatarUser = '';
  form: any = {}
  // @ts-ignore
  videoId: number;
  commentList?: Comment[];
  relatedVideos?: Video[];
  history ?: History;
  // @ts-ignore
  channel: Channel;
  status = '';
  myPlaylist ?: Playlist[];
  targetPlaylist ?: Playlist;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private actRouter: ActivatedRoute,
              private videoService: VideoService,
              private tokenService: TokenService,
              private commentService: CommentService,
              private channelService: ChannelService,
              private playlistService: PlaylistService,
              private historyService: HistoryService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(videoId => {
      // @ts-ignore
      const id = +videoId.get("id");

      this.videoId = id;
      this.videoService.getVideoDetail(id).subscribe(data => {
        this.video = data;
        this.channel = data.channel;
      })
      setTimeout(() => {
        this.videoService.actionUpdateView(id).subscribe()
      }, 5000)
      this.videoService.getCheckLikeVideo(id).subscribe(data => {
        if (data.message == "already") {
          this.checkLike = true;
        }
      })
      this.channelService.getCheckFollower(id).subscribe(data => {
        if (data.message == "already") {
          this.checkFollow = true;
        }
      })
      this.commentService.getListCommentService(id).subscribe(data => {
        this.commentList = data
      })
      this.videoService.getRelatedVideo(id).subscribe(data => {
        this.relatedVideos = data
      })
    })
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
      this.nameUser = this.tokenService.getName()
      this.avatarUser = this.tokenService.getAvatar()
      this.playlistService.getMyPlaylistService().subscribe(data => {
        this.myPlaylist = data;
      })
      this.historyService.getMyHistory().subscribe(data => {
        this.history = data;
        this.historyService.actionAddVideoToHistory(this.videoId, data).subscribe();
      })
    }
  }

  actionLike(id: any) {
    this.videoService.actionLikeOrUnlikeVideo(id, this.video).subscribe(data => {
      this.videoService.getVideoDetail(id).subscribe(data => {
        this.video = data;
        this.checkLike = !this.checkLike;
      })
    })
  }

  postComment() {
    this.commentService.actionPostCommentService(this.videoId, this.form).subscribe(data => {
      this.videoService.getVideoDetail(this.videoId).subscribe(data => {
        this.video = data;
      })
    })
  }

  actionFollow(id: any) {
    this.channelService.actionFollowOrUnfollowService(id, this.channel).subscribe(data => {
      if (data.message == 'no_permission') {
        this.status = "Can not subscribe your channel!"
      } else {
        this.videoService.getVideoDetail(this.videoId).subscribe(data => {
          this.video = data;
          this.checkFollow = !this.checkFollow;
        })
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }

  addOrRemoveFromPlaylist(id: any) {
    this.playlistService.getDetailPlaylistService(id).subscribe(data => {
      this.playlistService.actionAddOrRemoveVideoService(data, this.videoId).subscribe(data => {
        if (data.message == 'add_successful') {
          this.openSnackBar("Add successful!")
        } else if (data.message == 'remove_successful') {
          this.openSnackBar("Remove successful!")
        } else {
          this.openSnackBar("Can't action!")
        }
      })
    })
  }

  routerVideo(id: any) {
    this.router.navigate(['/video/'+id])
    this.videoService.getVideoDetail(this.videoId).subscribe(data => {
      this.video = data;
      window.location.reload()
    })
  }
}
