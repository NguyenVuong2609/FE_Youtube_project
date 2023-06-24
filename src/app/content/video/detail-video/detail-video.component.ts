import {Component, OnInit} from '@angular/core';
import {Video} from "../../../model/Video";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../../service/video.service";

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit{
  // @ts-ignore
  video = new Video();

  constructor(private actRouter: ActivatedRoute,
              private videoService: VideoService) {
  }
  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(videoId =>{
      // @ts-ignore
      const id = +videoId.get("id");
      this.videoService.getVideoDetail(id).subscribe(data=>{
        this.video = data;
      })
    })
  }
}
