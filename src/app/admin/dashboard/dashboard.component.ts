import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  isAdmin: boolean = false;
  user: any = {};

  constructor(
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
    this.fsAuth.auth.onAuthStateChanged(user => {
      if (user.uid != null) {
        this.isAdmin = true;
      }
      this.getUser(user.uid);
    });
  }

  ngAfterViewInit() {
    firebase.analytics().logEvent('pejuangtech', {
      'firstname' : true,
      'username'  : 'PejuangTech'
    })
  }

  getUser(uid) {
    this.db.collection('users').doc(uid).get().subscribe(res => {
      this.user = res.data();
    })
  }

keluar() {
  var conf = confirm('Yakin ingin keluar dari akun?');
    if (conf) {
      this.fsAuth.auth.signOut().then(res => {
        this.router.navigate(['/auth']);
        alert('Anda berhasil keluar!');
      });
    } else {
      return
  }
}


}
