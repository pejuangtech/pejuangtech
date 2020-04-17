import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, NavigationEnd } from '@angular/router';

// export interface RouteInfo {
//   path: string;
//   title: string;
//   icon: string;
//   class: string;
// }

// export const ROUTES: RouteInfo[] = [
//   { path: '/admin/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
//   { path: '/admin/testimoni', title: 'Testimoni', icon: 'nc-diamond', class: '' },
//   { path: '/admin/portofolio', title: 'Portofolio', icon: 'nc-single-02', class: '' },
//   { path: '/admin/settings', title: 'Settings', icon: 'nc-settings-gear-65', class: '' },
//   // { path: '/admin/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
//   // { path: '/admin/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
//   // { path: '/admin/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public menuItems: any[];
  isAdmin: boolean = false;
  user: any = {};

  constructor(
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
    this.fsAuth.auth.onAuthStateChanged(user => {
      this.getAkses(user.uid);
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.cekAkses(e.url, user.uid);
        }
      })
    });
  }

  akses: any = {};
  akseskategori: any;
  getAkses(uid) {
    this.db.collection('admin').doc(uid).valueChanges().subscribe(res => {
      if (res != undefined)
        this.parseAkses(res);
    })
  }

  parseAkses(data) {
    this.akseskategori = data.kategori;
    var dat = data.akses;
    for (var i = 0; i < dat.length; i++) {
      this.akses[dat[i]] = true;
    }
  }

  cekAkses(url, uid) {
    this.db.collection('admin').doc(uid).get().subscribe(res => {
      if (res.data().akses != undefined && res.data().akseskategori == 'admin') {
        var idx = res.data().akses.indexOf(url);
        if (idx == -1) {
          this.fsAuth.auth.signOut();
          this.router.navigate(['/auth']);
        }
      }
    })
  }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
