import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../service/video.service";
import {Video} from "../../model/Video";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  videoList ?: Video[];


  constructor(private actRouter: ActivatedRoute,
              private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(name => {
      // @ts-ignore
      const videoName: string = name.get("name");
      this.videoService.actionSearchService(videoName).subscribe(data => {
        this.videoList = data;
      })
    })
  }

}
