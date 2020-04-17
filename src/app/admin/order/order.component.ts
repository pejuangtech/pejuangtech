import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DetailOrderComponent } from '../../modal/detail-order/detail-order.component'
import { AcceptedOrderComponent } from '../..//modal/accepted-order/accepted-order.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  idOrder: any;
  dataOrder: any = [];
  data: any = [];
  constructor(
    public db: AngularFirestore,
    private modalService: NgbModal,
  ) {
    this.getOrder();
    this.getOrderAccept();
  }

  ngOnInit() {
  }

  open(administrator) {
    const modalRef = this.modalService.open(DetailOrderComponent);
    modalRef.componentInstance.user = this.dataOrder;
    modalRef.result.then(res => {
      console.log("CloseButton", res)
    }, dismiss => {
      console.log("Cross Button", dismiss)
    })
  }
  openAccepted() {
    const modalRef = this.modalService.open(AcceptedOrderComponent);
    modalRef.componentInstance.user = this.data;
    modalRef.result.then(res => {
      console.log("CloseButton", res)
    }, dismiss => {
      console.log("Cross Button", dismiss)
    })
  }

  getOrder() {
    this.db.collection('order', ref => {
      return ref.where('verified', '==', false)
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      this.dataOrder = res;
    })
  }
  getOrderAccept() {
    this.db.collection('order', ref => {
      return ref.where('verified', '==', true)
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      this.data = res;
    })
  }

}
