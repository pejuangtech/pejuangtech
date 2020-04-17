import { Component, OnInit, SecurityContext } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit {

  id_portofolio : any;
  cover: any;
  banner: any;

  constructor(
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore,
    public storage: AngularFireStorage,
    private actRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {
    this.id_portofolio = this.actRoute.snapshot.params.id;
    this.getPortofolios(this.id_portofolio);
  }

  ngOnInit() {
  }

  dataPortofolios: any;
  getPortofolios(id_portofolio) {
    this.db.collection('portofolios').doc(id_portofolio).valueChanges().subscribe(res => {
        this.dataPortofolios = res;
    })
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

}
