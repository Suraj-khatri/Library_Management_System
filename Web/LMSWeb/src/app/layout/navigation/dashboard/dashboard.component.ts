import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashboard: any;
  constructor(private nService: NavigationService) { }

  ngOnInit(): void {
    this.getDashboard();
    console.log("dash");
    console.log("dash");
  }

  getDashboard() {
    let json = {};
    this.nService.getDashboard(json).subscribe((res) => {
      if (res) {

        this.dashboard = res[0];
        console.log(this.dashboard);


      }
    });
  }

}
