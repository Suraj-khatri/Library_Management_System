import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MembershipService } from '../membership.service';
import { MembershipComponent } from '../membership.component';

@Component({
  selector: 'app-membership-from',
  templateUrl: './membership-from.component.html',
  styleUrls: ['./membership-from.component.scss']
})
export class MembershipFromComponent implements OnInit {
  public membershipTypeList:any=[];
  constructor(
    public diaglogRef : MatDialogRef<MembershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public mService:MembershipService

  ) { }

  formObject = {
    membershipType:'',
    duration:'',
    fee : '',
    charge:'',
    borrowDuration:'',
    maxBorrow:'',
    description:'',
    userPersonId: localStorage.getItem('userPersonId'),
  };


  ngOnInit(): void {
    this.getMembershipType();
    console.log(this.data);
    if(this.data.mode.toLowerCase()=='edit')
    {
      this.formObject = {...this.data.data};
    }
  }

  getMembershipType() {
    let json = {};
    this.mService.getMembershipType(json).subscribe((res) => {
      if (res) {
        this.membershipTypeList = res;
      }
    });
  }

  save(){
    this.mService.setMembership(this.formObject).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')
        this.diaglogRef.close(res);
      }
    })
  }

}
