import {Component, OnInit} from '@angular/core';
import {Video} from "../../../model/Video";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../../service/video.service";
import {TokenService} from "../../../service/token.service";
import {CommentService} from "../../../service/comment.service";
import {Comment} from "../../../model/Comment";

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit {
  // @ts-ignore
  video = new Video();
  checkLike = false;
  checkLogin = false;
  nameUser = '';
  avatarUser = '';
  form: any = {}
  // @ts-ignore
  videoId: number;
  commentList?: Comment[];

  constructor(private actRouter: ActivatedRoute,
              private videoService: VideoService,
              private tokenService: TokenService,
              private commentService: CommentService,) {
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(videoId => {
      // @ts-ignore
      const id = +videoId.get("id");
      this.videoId = id;
      this.videoService.getVideoDetail(id).subscribe(data => {
        this.video = data;
      })
      this.videoService.getCheckLikeVideo(id).subscribe(data => {
        if (data.message == "already") {
          this.checkLike = true;
        }
      })
      this.commentService.getListCommentService(id).subscribe(data =>{
        this.commentList = data
      })
    })
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
      this.nameUser = this.tokenService.getName()
      this.avatarUser = this.tokenService.getAvatar()
    }
  }

  actionLike(id: any) {
    this.videoService.actionLikeOrUnlikeVideo(id, this.video).subscribe(data => {
      window.location.reload();
    })
  }

  postComment() {
    this.commentService.actionPostCommentService(this.videoId,this.form).subscribe(data => {
      window.location.reload()
    })
  }
}
