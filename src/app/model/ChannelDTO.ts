export class ChannelDTO{
  private chName?: string;
  private avatar?: string;

  constructor(chName: string, avatar: string) {
    this.chName = chName;
    this.avatar = avatar;
  }
}
