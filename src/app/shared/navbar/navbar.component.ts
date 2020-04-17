import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    isAdmin: boolean = false;
    user: any = {};

    constructor(
        public location: Location,
        public fsAuth: AngularFireAuth,
        private element : ElementRef,
        private router: Router,
        private db: AngularFirestore
    ) {
        this.sidebarVisible = false;
        this.fsAuth.auth.onAuthStateChanged(user => {
            if(user.uid != null) {
                this.isAdmin = true;
            }
            this.getUser(user.uid);
        });
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    getUser(uid) {
        this.db.collection('users').doc(uid).get().subscribe(res => {
          this.user = res.data();
        })
    }

    dashboard() {
        if(this.user.id != null) {
            this.router.navigate(['admin/dashboard']);
        }
    }

    public async keluar(): Promise<any> {
        var conf = confirm('Yakin ingin keluar dari akun?');
          if (conf) {
            this.fsAuth.auth.signOut().then(res => {
                this.isAdmin = false;
              this.router.navigate(['/']);
              alert('Anda berhasil keluar!');
            });
          } else {
            return
        }
    }
    
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
