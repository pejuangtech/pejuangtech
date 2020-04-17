import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalAdministratorComponent } from '../../modal/modal-administrator/modal-administrator.component';
import { EditAdministratorComponent } from '../../modal/edit-administrator/edit-administrator.component';
import { EditAboutComponent } from '../../modal/edit-about/edit-about.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  closeResult = '';
  isAdmin: boolean = false;
  user: any = [];
  data: any = {};
  oldAkses: any = [];
  akses: any = [
    {
      0: '/admin/dashboard',
      1: '/admin/portofolio',
    }
  ];

  constructor(
    private modalService: NgbModal,
    public fsAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
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

  open(administrator) {
    const modalRef = this.modalService.open(ModalAdministratorComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then(res => {
      console.log("CloseButton", res)
    }, dismiss => {
      console.log("Cross Button", dismiss)
    })
  }
  datas: any = [];
  openEdit(item) {
    this.datas = item;
    console.log(this.datas);
    const modalRef = this.modalService.open(EditAdministratorComponent);
    modalRef.componentInstance.user = this.datas;
    modalRef.result.then(res => {
      console.log("CloseButton", res)
    }, dismiss => {
      console.log("Cross Button", dismiss)
    })
  }

  dataAbout: any = [];
  openEditAbout(item) {
    this.dataAbout = item;
    console.log(this.dataAbout);
    const modalRef = this.modalService.open(EditAboutComponent);
    modalRef.componentInstance.about = this.dataAbout;
    modalRef.result.then(res => {
      console.log("CloseButton", res)
    }, dismiss => {
      console.log("Cross Button", dismiss)
    })
  }

  getUser() {
    this.db.collection('users').valueChanges().subscribe(res => {
      this.user = res;
    })
  }

  about: any = [];
  getAbout() {
    this.db.collection('settings').doc('about').collection('data').doc('about').valueChanges().subscribe(res => {
      this.about = res;
  });
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
      })
    } else {
      var akses = this.oldAkses.concat(this.akses);
      this.db.collection('admin').doc(user.user.uid).update({ akses: akses }).then(res => {
        alert('Administrator baru berhasil ditambahkan');
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
    })
  }

  hapus(rowID) {
    var r = confirm("Anda yakin ingin menghapus data ini secara permanen ?");
    if (r == true) {
      this.hapusAkses(rowID);
      this.hapusTeam(rowID);
      this.db.collection('users').doc(rowID).delete();
      alert('Administrator baru berhasil dihapus');
    } else {
      return;
    }
  }

  loadingHapus: any = {};
  hapusAkses(id) {
    this.loadingHapus[id] = true;
    this.db.collection('admin').doc(id).delete().then(res => {
      this.loadingHapus[id] = false;
    })
  }

  hapusTeam(id) {
    this.loadingHapus[id] = true;
    this.db.collection('settings').doc('teams').collection('dataTeam').doc(id).delete().then(res => {
      this.loadingHapus[id] = false;
    })
  }
}
