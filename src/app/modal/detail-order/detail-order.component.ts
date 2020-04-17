import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    public db: AngularFirestore
  ) { }

  ngOnInit() {
    console.log(this.user);
  }

  loading: boolean;
  accept(user) {
    var id = user.id;
    console.log(id);
    var r = confirm("Are you sure you want to accept this story?");
    if (r == true) {
      var dt = { verified: true }
      this.db.collection('order').doc(id).update(dt).then(res => {
        this.loading = false;
        window.location.reload();
      })
    } else {
      return;
    }
  }
}
