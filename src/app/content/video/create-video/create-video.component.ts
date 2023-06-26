import {Component, OnInit} from '@angular/core';
import {VideoDTO} from "../../../model/VideoDTO";
import {VideoService} from "../../../service/video.service";
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit{
  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data =>{
      this.categoryList = data
    })
  }
  form: any = {};
  status = '';
  video?: VideoDTO;
  categoryList?: Category[];
  constructor(private videoService: VideoService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  onUpload($event: string) {
    this.form.avatar = $event;
  }

  onUploadFile($event: string) {
    this.form.link = $event;
  }

  createVideo() {
    this.form = new VideoDTO(this.form.name, this.form.link, this.form.avatar, this.form.categoryList);
    if (this.form.avatar == undefined) {
      this.status = 'Avatar is required!'
    } else if (this.form.link == undefined){
      this.status = 'Video is required!'
    } else {
      this.videoService.createVideoService(this.form).subscribe(data =>{
          if (data.message == 'channel_not_found'){
            this.status = 'Create channel first!'
          } else {
            this.status = 'Create success!'
            setTimeout(window.location.reload, 1000);
            window.location.reload();
          }
      })
    }
  }
}
