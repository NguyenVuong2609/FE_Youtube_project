import {Component} from '@angular/core';
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  form: any = {};
  category?: Category;
  status = 'Form Create Category';

  constructor(private categoryService: CategoryService) {
  }

  onUpload($event: string) {
    this.form.avatar = $event;
  }

  createCategory() {
    this.category = new Category(this.form.name, this.form.avatar);
    if (this.form.avatar == undefined) {
      this.status = 'Avatar is required!'
    } else {
      this.categoryService.createCategoryService(this.category).subscribe(data => {
        if (data.message == 'name_existed') {
          this.status = "The name is existed! Please try again!"
        } else if (data.message == 'create_success') {
          this.status = 'Create successful'
        }
      })
    }
  }
}
