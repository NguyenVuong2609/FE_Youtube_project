import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Category} from "../../../model/Category";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{
  status: any = "Edit form";
  // @ts-ignore
  category = new Category();

  constructor(private actRouter: ActivatedRoute,
              private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  updateCategory() {
    // @ts-ignore
    this.categoryService.updateCategory(this.category?.id, this.category).subscribe(data => {
      console.log(data)
      if (data.message == 'name_existed') {
        this.status = "The name is existed! Please try again!"
      } else if (data.message == "no_change") {
        this.status = "Nothing changed!"
      } else if (data.message == 'update_successful') {
        this.status = 'Update successful'
      }
    })
  }

  onUpload($event: string) {
    this.category.avatar = $event;
  }

  ngOnInit() {
    this.categoryService.getDetailCategory(this.data.datakey).subscribe(data => {
      console.log(data)
      this.category = data;
    })
  }
}
