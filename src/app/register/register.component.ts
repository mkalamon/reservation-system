import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {RegistrationService} from '../services/registration.service';
import {User} from '../model/user';

import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterFormComponent  implements OnInit {
  user: User = new User();
  myform: FormGroup;
  myname: FormGroup;
  modalElement: any;
  ulice: string[] = [
    'Kościuszki',
    'Pomorska',
    'Nowatorów',
  ];
  constructor (private registrationService: RegistrationService) { }
  private  setupUser() {
    console.log(this.myform.value.ulica);
    this.user.ulica = this.myform.value.ulica;
  this.user.email  = this.myform.value.email;
  // this.myname = this.myform.controls.name.value;
  this.user.imie = this.myform.value.name.firstName;
  this.user.nazwisko = this.myform.value.name.lastName;
  this.user.nrdomu = this.myform.value.nrdomu;
  this.user.telefon = this.myform.value.phoneNo;
  this.user.haslo = this.myform.value.password;
  }

    ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
firstName: new FormControl('', [
  Validators.required
]),
lastName: new FormControl('', Validators.required),
  }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.pattern('(?<!\\w)(\\(?(\\+|00)?48\\)?)?[ -]?\\d{3}[ -]?\\d{3}[ -]?\\d{3}(?!\\w)')
      ]),
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      ulica: new FormControl(),
      nrdomu: new FormControl(),
      agree: new FormControl()
  });
    // this.myform.controls.email.setValue('aaa@wp.pl');
      this.modalElement = document.getElementById('myModal');
    }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form is valid  :) !!!');
      this.setupUser();
      this.registrationService.addUser(this.user);
    } else {
      console.log('Form is invalid :( !!!');
      this.getFormValidationErrors();
    }
  }

// display all form errors
  getFormValidationErrors() {
    Object.keys(this.myform.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.myform.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
