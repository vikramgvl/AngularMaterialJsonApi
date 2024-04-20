//import { Component,ViewChild} from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import * as XLSX from 'xlsx';

import { MatDialog } from '@angular/material/dialog';
import { UserformComponent } from './Components/userform/userform.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator, } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements AfterViewInit{
  title = 'myapp';
  displayedColumns: string[] = ['id','firstname', 'lastname', 'email','dob','gender','department','company','experience','package','actions'];
  dataSource = new MatTableDataSource<any>;
  fileName= 'ExcelSheet.xlsx';

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  @ViewChild(MatSort)
  sort!: MatSort;

  
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }
  constructor(private _dialog: MatDialog,private _userservice: EmployeeService,private _liveAnnouncer: LiveAnnouncer) {}

  deleteUser(id: number) {
    console.log(id)
    this._userservice.deleteUser(id).subscribe(res => {
      alert("user deleted");
      this.getUser();

    });

  }
  addUser(){
    this._dialog.open(UserformComponent)
    console.log("user added");
   this.getUser();
   console.log("user addedzzzzzz");
  }
  ngOnInit(){
       this.getUser();
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ///
  getUser(){
    debugger;
    this._userservice.getUser().subscribe((data)=>{console.log(data)
    this.dataSource = new MatTableDataSource<any>(data);    
    this.dataSource.paginator = this.paginator;
    }) 
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  
}
