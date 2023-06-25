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
  roles?: string[];
  checkAdmin = false;

  constructor(private tokenService: TokenService,
              private channelService: ChannelService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName()
      this.avatar = this.tokenService.getAvatar()
      this.checkLogin = true;
      this.roles = this.tokenService.getRole()
      this.checkAdminRole()
      this.channelService.getMyChannel().subscribe(data => {
        if (data.message == "not_found") {
          this.curChannel = undefined
        } else {
          this.curChannel = data;
        }
      });
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  checkAdminRole() {
    if (this.roles) {
      for (let i = 0; i < this.roles?.length; i++) {
        if (this.roles[i].toLowerCase() == "admin") {
          this.checkAdmin = true;
          break;
        }
      }
    }
  }
}
