import {Category} from "./Category";

export class VideoDTO{
  private name?: string;
  private link?: string;
  private avatar?: string;
  categoryList?: Category[];

  constructor(name: string, link: string, avatar: string, categoryList: Category[]) {
    this.name = name;
    this.link = link;
    this.avatar = avatar;
    this.categoryList = categoryList;
  }
}
