import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  errorForm:string = '';
  successForm:string = '';
  imagesList:any;

  constructor(private _ApiService:ApiService, private toastr: ToastrService){}
  
  ngOnInit(): void {
    this._ApiService.getImages().subscribe(response =>{
      this.imagesList = response.data[0];
  
    })
  }

  registerForm:FormGroup = new FormGroup({
    "name" :new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    "email" :new FormControl(null, [Validators.required , Validators.email]),
    "phone" :new FormControl(null, [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    "password" :new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    "rePassword" :new FormControl(null, [Validators.required]),
  }, {validators : this.rePasswordMatch})

  rePasswordMatch(registerForm:any){
    let passwordControl = registerForm.get('password');
    let rePasswordControl = registerForm.get('rePassword');
    if(passwordControl.value === rePasswordControl.value){
      return null;
    }
    else{
      rePasswordControl.setErrors({passwordmatch : 'password and rePassword doesnot match'});
      return {passwordmatch : 'password and rePassword doesnot match'};
    }
  }

  submitRegister(formData:FormGroup){
    this._ApiService.handleRegister(formData.value).subscribe({
      next: (response)=>{
        if(response.message === "success"){
            this.toastr.success('Register is done :) ');

            this.successForm = 'success!'
            this.errorForm = ''
        }
        
      },
      error: (err)=>{
        console.log(err.error.message);
        this.errorForm = err.error.message;
        this.successForm = ''
        this.toastr.error(this.errorForm, 'Major Error', {
          timeOut: 3000,
        });
      }
    })
  }

}
