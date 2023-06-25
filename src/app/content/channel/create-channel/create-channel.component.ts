import { Component } from '@angular/core';
import {ChannelService} from "../../../service/channel.service";
import {ChannelDTO} from "../../../model/ChannelDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent {
  form: any = {};
  channel?: ChannelDTO;
  status = '';
  constructor(private channelService: ChannelService,
              private router: Router,) {
  }

  createChannel() {
    this.channel = new ChannelDTO(this.form.name, this.form.avatar);
    if (this.form.avatar == undefined) {
      this.status = 'Avatar is required!'
    } else {
      this.channelService.createChannelService(this.channel).subscribe(data => {
        if (data.message == 'name_existed') {
          this.status = "The name is existed! Please try again!"
        } else if (data.message == 'create_success') {
          this.status = 'Create successful'
          this.router.navigate(['/']);
          window.location.reload();
        }
      })
    }
  }
  onUpload($event: string) {
    this.form.avatar = $event;
  }
}
