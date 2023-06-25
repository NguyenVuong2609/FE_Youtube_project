import {JwtResponse} from "./JwtResponse";

export class Comment {
  public content?: string;
  public owner ?: JwtResponse;

  constructor(content: string, owner: JwtResponse) {
    this.content = content;
    this.owner = owner;
  }
}
