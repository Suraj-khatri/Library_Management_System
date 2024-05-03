import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from 'src/app/layout/auth/auth.service';
import { NavigationService } from 'src/app/layout/navigation/navigation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user.component';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userTypes = localStorage.getItem('userType');
  userId = localStorage.getItem('userPersonId');
  public userTypeList:any=[];
  constructor(private uService : UserService,private aService:AuthService,private nService :NavigationService,
    public diaglogRef : MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,

    ) { }

  public formObject: any = {
    name:'',
    email:'',
    userName:'',
    password:'',
    userType:'',
    userPerson: localStorage.getItem('userPersonId')
  };

  ngOnInit(): void {
    this.getUserType();
    console.log(this.data);
    if(this.data.mode.toLowerCase()=='edit')
    {
      this.formObject = {...this.data.data};
    }
  }
//get user type
  getUserType() {
    let json = {};
    this.nService.getUserType(json).subscribe((res) => {
      if (res) {
        this.userTypeList = res;
      }
    });
  }

  save(){
    this.aService.setUser(this.formObject).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')
        this.diaglogRef.close(res);
      }
    })
  }

}
