import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';
@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.scss']
})
export class OrderNowComponent implements OnInit {

  dataOrder: any = [];
  timestamp: any;
  model: NgbDateStruct;
  constructor(public db: AngularFirestore) {
    this.timestamp = firebase.firestore.FieldValue.serverTimestamp();
  }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
  }
  idOrder: any;
  loading: boolean;
  verified: boolean = false;

  addOrder() {
    this.loading = true;
    var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
    this.idOrder = doc;
    var dt = {
      id: this.idOrder,
      name: this.dataOrder.name,
      phone_number: this.dataOrder.phone,
      email: this.dataOrder.email,
      description: this.dataOrder.description,
      verified: this.verified,
      datetime: this.timestamp
    }
    console.log(this.idOrder);
    this.db.collection('order').doc(this.idOrder).set(dt).then(res => {
      this.loading = false;
      alert('your note has been sended to admin');
      window.location.reload();
    })
  }
}
