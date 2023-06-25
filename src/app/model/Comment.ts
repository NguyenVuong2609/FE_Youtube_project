import {JwtResponse} from "./JwtResponse";

export class Comment {
  public content?: string;
  public owner ?: JwtResponse;
  public date ?: string;

  constructor(content: string, owner: JwtResponse, date: string) {
    this.content = content;
    this.owner = owner;
    this.date = date;
  }
}
