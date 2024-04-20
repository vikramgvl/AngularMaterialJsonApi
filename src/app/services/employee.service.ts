import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addUser(data: any) {
    return this._http.post<any>("http://localhost:3000/employee", data)
  }
  getUser() {
    return this._http.get<any>("http://localhost:3000/employee")
  }
  deleteUser(id: number) {
    return this._http.delete<any>("http://localhost:3000/employee/" + id)
  }
}
