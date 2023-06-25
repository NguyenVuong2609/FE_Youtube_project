import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../../model/Category";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../service/token.service";
import {CategoryService} from "../../../service/category.service";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {UpdateCategoryComponent} from "../update-category/update-category.component";

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit{
  checkUserLogin = false;
  listCategory: Category[] = [];
  displayedColumns: string[] = ['index','name', 'avatar', 'edit'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.checkUserLogin = true;
    }
    this.categoryService.getListCategory().subscribe(data => {
      this.listCategory = data;
      this.dataSource = new MatTableDataSource<Category>(this.listCategory);
      this.dataSource.paginator = this.paginator;
    })
  }
  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private categoryService: CategoryService) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined){
        this.categoryService.getListCategory().subscribe(data => {
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogUpdate(id: any) {
    const dialogRef1 = this.dialog.open(UpdateCategoryComponent, {
      data: {
        datakey: id
      }
    });
    dialogRef1.afterClosed().subscribe(result => {
      if (result || result == undefined){
        this.categoryService.getListCategory().subscribe(data => {
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

}
