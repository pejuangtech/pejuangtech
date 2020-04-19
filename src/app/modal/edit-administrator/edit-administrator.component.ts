import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-edit-administrator',
  templateUrl: './edit-administrator.component.html',
  styleUrls: ['./edit-administrator.component.scss']
})
export class EditAdministratorComponent implements OnInit {
  data: any = {};
  isAdmin: boolean = false;
  oldAkses: any = [];
  akses: any = [
    {
      0: '/admin/dashboard',
      1: '/admin/portofolio',
    }
  ];
  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {

  }

  ngOnInit() {
  }


  loading: boolean;
  updateMember() {
    this.passEntry.emit(this.user);
    var doc = this.user.id;
    this.db.collection('users').doc(doc).update(this.user).then(res => {
      this.loading = false;
      alert('Administrator baru berhasil diperbarui')
    })
  }
}
