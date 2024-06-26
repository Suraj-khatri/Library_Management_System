import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate():boolean {
    if(localStorage.getItem('userType')==='1'){
      return true;
    }else{
      this.router.navigateByUrl('/not-found');
      return false;
    }
  }
}
