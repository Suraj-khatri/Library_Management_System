import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToHomePage() {
    // Get user role from localStorage or AuthService
    const userType = localStorage.getItem('userType'); // Example: 'user' or 'admin'

    // Navigate users to their respective home pages

    if (userType === '1') {
      this.router.navigate(['/navigation']);
    } else {
      this.router.navigate(['/customer']);
    }
  }

}
