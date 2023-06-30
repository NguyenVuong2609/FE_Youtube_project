import {Category} from "./Category";

export class VideoDTO{
  private name?: string;
  private link?: string;
  private avatar?: string;
  category?: Category[];

  constructor(name: string, link: string, avatar: string, categoryList: Category[]) {
    this.name = name;
    this.link = link;
    this.avatar = avatar;
    this.category = categoryList;
  }
}
