import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {ChannelService} from "../../../service/channel.service";
import {Channel} from "../../../model/Channel";
import {Video} from "../../../model/Video";
import {JwtResponse} from "../../../model/JwtResponse";

@Component({
  selector: 'app-mychannel',
  templateUrl: './mychannel.component.html',
  styleUrls: ['./mychannel.component.css']
})
export class MychannelComponent implements OnInit{
  checkLogin = false;
  channel ?: Channel;
  videoList ?: Video[];
  subscriberList ?: JwtResponse[];
  constructor(private tokenService: TokenService,
              private channelService: ChannelService) {
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
      this.channelService.getMyChannel().subscribe(data => {
        if (data.message == "not_found") {
          this.channel = undefined
        } else {
          this.channel = data;
          this.channelService.getAllVideoOfMyChannel(data.id).subscribe(data =>{
            this.videoList = data;
          })
          this.channelService.getSubscriberList(data.id).subscribe(data => {
            this.subscriberList = data;
          })
        }
      });
    }
  }
}
