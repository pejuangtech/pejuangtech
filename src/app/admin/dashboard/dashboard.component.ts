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
  data: any = [];
  portofolio: any = [];
  stories: any = [];
  constructor(
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
    this.fsAuth.auth.onAuthStateChanged(user => {
      if (user.uid != null) {
        this.isAdmin = true;
      }
    });
    this.getOrderAccept();
    this.getPortofolio();
    this.getStories();
    this.getUser();
  }

  ngAfterViewInit() {
    firebase.analytics().logEvent('pejuangtech', {
      'firstname': true,
      'username': 'PejuangTech'
    })
  }

  getUser() {
    this.db.collection('users').valueChanges({ idField: 'id' }).subscribe(res => {
      this.user = res;
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

  getOrderAccept() {
    this.db.collection('order', ref => {
      return ref.where('verified', '==', true)
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      this.data = res;
    })
  }
  getPortofolio() {
    this.db.collection('portofolios').valueChanges({ idField: 'id' }).subscribe(res => {
      this.portofolio = res;
    })
  }

  getStories() {
    this.db.collection('stories').valueChanges({ idField: 'id' }).subscribe(res => {
      this.stories = res;
    })
  }

}
