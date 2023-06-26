import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {HistoryService} from "../../../service/history.service";
import {Video} from "../../../model/Video";
import {History} from "../../../model/History";

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {
  checkLogin = false;
  videoList ?: Video[];
  history?: History;

  constructor(private tokenService: TokenService,
              private historyService: HistoryService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
      this.historyService.getListVideoHistory().subscribe(data => {
        this.videoList = data;
        this.historyService.getMyHistory().subscribe(data => {
          this.history = data;
        })
      })
    }
  }

  removeFromHistory() {
    if (this.history != undefined) {
      this.historyService.actionRemoveVideoFromHistory(this.history).subscribe(data =>{
        console.log(data)
        this.historyService.getListVideoHistory().subscribe(data => {
          this.videoList = data;
        })
      })
    }
  }
}
