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
  datas: any = [];
  openAccepted(item) {
    this.datas = item;
    const modalRef = this.modalService.open(AcceptedOrderComponent);
    modalRef.componentInstance.user = this.datas;
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
  loading: boolean;
  delete(item) {
    var id = item.id;
    console.log(id);
    var r = confirm("Are you sure you want to delete this portofolio?");
    if (r == true) {
      this.db.collection('order').doc(id).delete().then(res => {
        this.loading = false;
      })
    } else {
      return;
    }
  }

}
