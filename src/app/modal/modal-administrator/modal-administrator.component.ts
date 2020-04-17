import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-administrator',
  templateUrl: './modal-administrator.component.html',
  styleUrls: ['./modal-administrator.component.scss']
})
export class ModalAdministratorComponent implements OnInit {
  user: any = [];
  data: any = {};
  isAdmin: boolean = false;
  oldAkses: any = [];
  akses: any = [
    {
      0: '/admin/dashboard',
      1: '/admin/portofolio',
    }
  ];
  constructor(
    public activeModal: NgbActiveModal,
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
    this.fsAuth.auth.onAuthStateChanged(user => {
      if (user.uid != null) {
        this.isAdmin = true;
      }
      this.getUser();
      this.getAbout();
    });
  }

  ngOnInit() {
  }

  getUser() {
    this.db.collection('users').valueChanges().subscribe(res => {
      this.user = res;
      console.log(this.user);
    })
  }

  about: any = [];
  getAbout() {
    this.db.collection('settings').doc('about').valueChanges().subscribe(res => {
      this.about = res;
      console.log(this.about);
    })
  }

  loading: boolean;
  tambahData() {
    this.loading = true;
    if (this.user.id == undefined)
      this.tambahAkun();
    else
      this.updateMember();
  }

  status: any;
  error: any = {};
  tambahAkun() {
    this.fsAuth.auth.createUserWithEmailAndPassword(this.data.email, this.data.phone).then(res => {
      this.tambahUser(res);
    })
  }

  tambahUser(user) {
    var dt = {
      id: user.user.uid,
      nama: this.data.nama,
      email: this.data.email,
      phone: this.data.phone,
      skill: this.data.skill,
      category: this.data.category
    }
    this.db.collection('users').doc(user.user.uid).set(dt).then(res => {
      this.tambahTeam(user);
      this.tambahAdmin(user);
    })
  }

  tambahTeam(user) {
    var dt = {
      images: '',
      nama: this.data.nama,
      skill: this.data.skill
    };
    this.db.collection('settings').doc('teams').collection('dataTeam').doc(user.user.uid).set(dt).then(res => {

    })
  }

  tambahAdmin(user) {
    var dt = {
      akses: ['/admin/dashboard'],
      kategori: this.data.category
    };
    if (this.user != null) {
      this.db.collection('admin').doc(user.user.uid).set(dt).then(res => {
        alert('Administrator baru berhasil ditambahkan');
        window.location.reload();
      })
    } else {
      var akses = this.oldAkses.concat(this.akses);
      this.db.collection('admin').doc(user.user.uid).update({ akses: akses }).then(res => {
        alert('Administrator baru berhasil ditambahkan');
        window.location.reload();
      })
    }
  }

  updateMember() {
    var doc = this.user.uid;
    this.user.nama = this.data.nama;
    this.user.email = this.data.email;
    this.user.phone = this.data.phone;
    this.user.skill = this.data.skill;
    this.user.category = this.data.category;
    this.db.collection('users').doc(doc).update(this.user).then(res => {
      this.loading = false;
      alert('Administrator baru berhasil diperbarui');
      window.location.reload();
    })
  }

}
