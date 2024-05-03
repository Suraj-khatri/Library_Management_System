import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('signInForm') signInForm!: NgForm;
  @ViewChild('signUpForm') signUpForm!: NgForm;
  public formObject: any = {
    name:'',
    email:'',
    userName:'',
    password:'',
    userType:'',
    userPerson: localStorage.getItem('userPersonId')
  };
 public RepasswordValue :string ='';
  userTypeList:any =[];
ngForm: any;
  constructor(public nService: NavigationService,public authService:AuthService,public router:Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getUserType();
  }

  getUserType() {
    let json = {};
    this.nService.getUserType(json).subscribe((res) => {
      if (res) {
        this.userTypeList = res;
      }
    });
  }

  login(){
    const json = this.formObject;
    this.authService.getUser(json).subscribe(res => {
      if(res) {
        // alert("Login Successful");
        this.snackBar.open("Login Successful", "Close",{ verticalPosition: 'top' });
        console.log(res);
        console.log("received");
        let userId = res[0].userId;
        let userType =res[0].userType;
        localStorage.setItem("userPersonId", userId);
        console.log(userType);
        localStorage.setItem("userType", userType);

        const redirectUrl = userType === 1 ? '/navigation' : userType === 2 ? '/customer' : '/';        //console.log(localStorage.getItem("userPersonId"));
        //console.log(userId);

        // let json = { res };
        // localStorage.setItem('user', JSON.stringify(json));
        // this.router.navigate(['navigation']);
        this.router.navigate([redirectUrl]);
      }
      else
      {
        this.snackBar.open("Login Failed", "Close",{ verticalPosition: 'top' });
      }
    });
  }

  register(){
    this.authService.setUser(this.formObject).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received');
        this.clearFormFields();
        this.snackBar.open("User Created!!!", "Close",{ verticalPosition: 'top' });
      }
      else
      {
        this.snackBar.open("Signup Failed", "Close",{ verticalPosition: 'top' });
      }
    })
  }

  clearFormFields() {
    this.formObject = {
      name: '',
      email: '',
      userName: '',
      password: '',
      userType: '',
      userPerson: 1
    };
    this.signInForm.resetForm();
    this.signUpForm.resetForm();
  }



}
