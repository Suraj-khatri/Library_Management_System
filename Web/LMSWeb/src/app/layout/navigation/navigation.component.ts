import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navigationList: any = [
  ];
drawer: any;
  constructor(private nService:NavigationService,public router:Router) { }

  ngOnInit(): void {
    this.getNavigation();
  }
  getNavigation() {
    let json = {};
    this.nService.getNavigation(json).subscribe((res) => {
      if (res) {
        this.navigationList = res;
      }
    });
  }

  logout(){
    localStorage.removeItem('userPersonId');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    this.router.navigate(['/auth']);
  }

}
