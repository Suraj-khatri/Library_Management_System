import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationService } from 'src/app/layout/navigation/navigation.service';
import { UserService } from 'src/app/user/user.service';
import { CustomershipService } from '../customership.service';
import { MembershipService } from 'src/app/membership/membership.service';
import { CustomermembershipComponent } from '../customermembership.component';

@Component({
  selector: 'app-add-customermembership',
  templateUrl: './add-customermembership.component.html',
  styleUrls: ['./add-customermembership.component.scss']
})
export class AddCustomermembershipComponent implements OnInit {

  userTypeList:any =[];
  public membershipTypeList:any=[];



  customerMembership: any = { // Define a property to hold the form data
    name: '',
    email: '',
    phone: '',
    userName: '',
    password: '',
    userType: '',
    membershipId: '',
    userPersonId: localStorage.getItem('userPersonId')
  };


  constructor(public nService:NavigationService,
    public diaglogRef : MatDialogRef<CustomermembershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public cmService:CustomershipService,
    public mService:MembershipService,
    ) { }

  ngOnInit(): void {
    console.log(this.membershipTypeList)
    this.getUserType();
    this.getMembershipType();
  }

  getUserType() {
    let json = {};
    this.nService.getUserType(json).subscribe((res) => {
      if (res) {
        this.userTypeList = res;
      }
    });
  }

  save(){

    console.log(this.data);
    this.cmService.setCustomerMembership(this.customerMembership).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')
        this.diaglogRef.close(res);
      }
    })
  }

  getMembershipType() {
    let json = {};
    this.mService.getMembershipType(json).subscribe((res) => {
      if (res) {
        this.membershipTypeList = res;
      }
    });
  }


}
