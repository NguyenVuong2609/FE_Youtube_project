import {Category} from "./Category";
import {JwtResponse} from "./JwtResponse";
import {Channel} from "./Channel";

export class Video {
  public id?: number;
  public name?: string;
  public vlink?: string;
  public avatar?: string;
  public views?: number;
  public categoryList?: Category[];
  public likeList?: JwtResponse[];
  public date?: string;
  public channel?: Channel;


  constructor(name: string, vlink: string, avatar: string, views: number, categoryList: Category[], likeList: JwtResponse[], date: string, channel: Channel) {
    this.name = name;
    this.vlink = vlink;
    this.avatar = avatar;
    this.views = views;
    this.categoryList = categoryList;
    this.likeList = likeList;
    this.date = date;
    this.channel = channel;
  }
}
