import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('user');
    // const userType =localStorage.getItem("userType");
    // const isAdmin = (userType == '1') ? 'true' : 'false';
    if (isLoggedIn) {
      return true;
    } else {
      alert("you are not logged in as admin.");
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
