//import { Component,ViewChild} from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';

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
  displayedColumns: string[] = [ 'firstname', 'lastname', 'email','dob','gender','department','company','experience','package'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  constructor(private _dialog: MatDialog,private _userservice: EmployeeService) {}

  
  addUser(){
    this._dialog.open(UserformComponent)
    console.log("user added");
  }
  ngOnInit(){
       this.getUser();
  }
  getUser(){
    this._userservice.getUser().subscribe((data)=>{console.log(data)
    this.dataSource = new MatTableDataSource<any>(data);    
    this.dataSource.paginator = this.paginator;
    }) 
  }
}
