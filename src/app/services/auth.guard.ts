import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '@services/auth.service';
import {DialogService} from '@services/dialog.service';
import {SignInDialogComponent} from '@components/modals/sign-in-dialog/sign-in-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private dialogService: DialogService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthed) {
      return true;
    } else {
      this.auth.logout();
      this.router.navigate(['/']).then(() => {
        this.dialogService.openDialog(SignInDialogComponent);
      });
      return false;
    }
  }
}
