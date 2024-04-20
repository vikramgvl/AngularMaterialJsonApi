import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {

  registerForm: FormGroup;
  constructor(private _fg: FormBuilder, private _empservice: EmployeeService,private _dialogref:MatDialogRef<UserformComponent>) {
    this.registerForm = this._fg.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      department: '',
      company: '',
      experience: '',
      package: '',
    })
  }

  onFormSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this._empservice.addUser(this.registerForm.value)
      .subscribe((data) => { console.log(data) })
      alert("user added")
      this._dialogref.close();
    }
    //console.log(this.registerForm.value)
  }
  onClose() {
    console.log("close")
    this._dialogref.close();
  }
}
