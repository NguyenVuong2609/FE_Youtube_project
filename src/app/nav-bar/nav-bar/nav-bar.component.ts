import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {ChannelService} from "../../service/channel.service";
import {Channel} from "../../model/Channel";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name = '';
  avatar = '';
  checkLogin = false;
  curChannel?: Channel;

  constructor(private tokenService: TokenService,
              private channelService: ChannelService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName()
      this.avatar = this.tokenService.getAvatar()
      this.checkLogin = true;
      this.channelService.getMyChannel().subscribe(data =>{
        this.curChannel = data;
      });

    }
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }
}
