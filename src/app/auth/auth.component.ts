import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  loading: boolean;
  email: any;
  password: any;

  login(email, password) {
    this.loading = true;
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      this.cekAkses(res.user.uid);
    }).catch(error => {
      this.loading = false;
      alert('Email atau Password salah.');
    })
  }

  cekAkses(uid) {
    console.log(uid);
    this.db.collection('admin').doc(uid).get().subscribe(res => {
      console.log(res.data());
      if (res.data() != undefined)
        this.routeAction(res.data());
      else this.noaccess();
    })
  }

  noaccess() {
    this.loading = false;
    this.afAuth.auth.signOut();
    alert('Anda tidak memiliki hak akses.');
  }

  routeAction(data) {
    this.loading = false;
    if (data.kategori == 'superadmin') {
      this.router.navigate(['/admin/dashboard']);
    } else if (data.kategori == 'admin') {
      console.log(data.akses[0]);
      this.router.navigate(['/' + data.akses[0]]);
    }
    else this.noaccess();
  }

}
