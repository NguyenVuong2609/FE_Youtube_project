import {JwtResponse} from "./JwtResponse";


export class Channel {
  public chName ?: string;
  public avatar ?: string;
  public user ?: JwtResponse;
  public followerList ?: JwtResponse[];

  constructor(chName: string, avatar: string, user: JwtResponse, followerList: JwtResponse[]) {
    this.chName = chName;
    this.avatar = avatar;
    this.user = user;
    this.followerList = followerList;
  }
}
