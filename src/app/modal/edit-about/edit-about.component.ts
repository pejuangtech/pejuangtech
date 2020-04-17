import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {

  @Input() public about;
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
  updateAbout() {
    this.passEntry.emit(this.about);
    this.db.collection('settings').doc('about').collection('data').doc('about').update(this.about).then(res => {
      this.loading = false;
      alert('Data about baru berhasil diperbarui')
    })
  }

}
