import {Video} from "./Video";
import {JwtResponse} from "./JwtResponse";

export class Playlist {
  public id?: number;
  public name?: string;
  public videoList?: Video[];
  private status?: boolean;
  private user?: JwtResponse;


  constructor(name: string) {
    this.name = name;
  }
}
