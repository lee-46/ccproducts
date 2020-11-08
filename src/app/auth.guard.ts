import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _profileService: ProfileService, private _snackBar: MatSnackBar, private _router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._profileService.isLogged) {
      return true;
    }
    else {
      this._snackBar.open("You are NOT authorised, do login!", '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      return this._router.parseUrl("/login");
    }
  }

}
