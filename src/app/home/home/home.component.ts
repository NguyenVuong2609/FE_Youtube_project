import {Component, OnInit} from '@angular/core';
import {VideoService} from "../../service/video.service";
import {PageEvent} from "@angular/material/paginator";
import {Video} from "../../model/Video";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const request = {page: 0, size: 6}
    this.getPageRequest(request);
  }

  listVideo?: Video[];
  totalElements = 6;

  constructor(private videoService: VideoService) {
  }

  getPageRequest(request: any) {
    this.videoService.getListVideoPageService(request).subscribe(data => {
      console.log(data)
      this.listVideo = data["content"];
      this.totalElements = data["totalElements"]
    })
  }

  nextPage($event: PageEvent) {
    console.log("here")
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);

  }
}
