import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class ngformComponent {
  selectOptions = ['Ms.','Mrs.','Mr.']
  myselect = new FormControl(this.selectOptions[2],[
     Validators.required
  ])
   payment = new FormControl("",[
     Validators.required
   ])
  firstname = new FormControl('',[
    Validators.required,
  ])
  lastname = new FormControl('', [
    Validators.required,
  ])
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  address = new FormControl('', [
    Validators.required,
  ])
  city = new FormControl('', [
    Validators.required,
  ])
  postalcode = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(6)
  ])
  state = new FormControl('', [
    Validators.required,
  ])
  phone = new FormControl('', [
    Validators.required,
  ])
  country = new FormControl('', [
    Validators.required,
  ])
  requirement = new FormControl('', [
    Validators.required,
  ])
  fax = new FormControl('', [
    Validators.required,
  ])


  ngform:FormGroup

  constructor(private fb : FormBuilder) {
    this.ngform = this.fb.group({
      myselect:this.myselect,
      payment:this.payment,
      firstname:this.firstname,
      lastname:this.lastname,
      email : this.email,
      fax: this.fax,
      address:this.address,
      city:this.city,
      postalcode:this.postalcode,
      state:this.state,
      country:this.country,
      phone:this.phone,
      requirement:this.requirement
    })
   }

   onRegister(){
     console.log(this.ngform);
   }
   onReset(){
     this.ngform.reset();
   }
}
