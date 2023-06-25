import {JwtResponse} from "./JwtResponse";


export class Channel {
  public id ?:number;
  public chName ?: string;
  public avatar ?: string;
  public user ?: JwtResponse;
  public followerList ?: JwtResponse[];


  constructor(id: number, chName: string, avatar: string, user: JwtResponse, followerList: JwtResponse[]) {
    this.id = id;
    this.chName = chName;
    this.avatar = avatar;
    this.user = user;
    this.followerList = followerList;
  }
}
