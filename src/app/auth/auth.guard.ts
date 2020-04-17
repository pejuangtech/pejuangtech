import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.afAuth.authState
       .take(1)
       .map(user => !!user)
       .do(loggedIn => {
         if (!loggedIn) {
           alert("Anda tidak mempunyai akses!");
           this.router.navigate(['/home']);
         }
     })
   }
}
