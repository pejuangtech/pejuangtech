import { Component, OnDestroy, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgcCookieConsentService, NgcInitializeEvent, NgcStatusChangeEvent, NgcNoCookieLawEvent } from 'ngx-cookieconsent';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    //keep refs to subscriptions to be able to unsubscribe later
    private popupOpenSubscription: Subscription;
    private popupCloseSubscription: Subscription;
    private initializeSubscription: Subscription;
    private statusChangeSubscription: Subscription;
    private revokeChoiceSubscription: Subscription;
    private noCookieLawSubscription: Subscription;

    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(
        private renderer: Renderer,
        private router: Router,
        @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
        public location: Location,
        private ccService: NgcCookieConsentService
    ) { }
    ngOnInit() {

        // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
        () => {
          // you can use this.ccService.getConfig() to do stuff...
        });
  
      this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
        () => {
          // you can use this.ccService.getConfig() to do stuff...
        });
  
      this.initializeSubscription = this.ccService.initialize$.subscribe(
        (event: NgcInitializeEvent) => {
          // you can use this.ccService.getConfig() to do stuff...
        });
  
      this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
        (event: NgcStatusChangeEvent) => {
          // you can use this.ccService.getConfig() to do stuff...
        });
  
      this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
        () => {
          // you can use this.ccService.getConfig() to do stuff...
        });
  
        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
        (event: NgcNoCookieLawEvent) => {
          // you can use this.ccService.getConfig() to do stuff...
        });

        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }

    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return true;
        }
        else {
            return false;
        }
    }

    ngOnDestroy() {
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
      }
}
