import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarsComponent } from './admin/navbars/navbars.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AuthComponent } from './auth/auth.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { ModalAdministratorComponent } from './modal/modal-administrator/modal-administrator.component';
import { EditAdministratorComponent } from './modal/edit-administrator/edit-administrator.component';
import { EditAboutComponent } from './modal/edit-about/edit-about.component';
import { ImageUploaderComponent } from './media/image-uploader/image-uploader.component';
//image cropper
import { ImageCropperModule } from 'ngx-image-cropper';
import { DetailOrderComponent } from './modal/detail-order/detail-order.component';
import { AcceptedOrderComponent } from './modal/accepted-order/accepted-order.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarsComponent,
    FooterComponent,
    AdminComponent,
    AuthComponent,
    SidebarComponent,
    ModalAdministratorComponent,
    EditAdministratorComponent,
    EditAboutComponent,
    ImageUploaderComponent,
    DetailOrderComponent,
    AcceptedOrderComponent,
    PortofolioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    CommonModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ExamplesModule,
    AppRoutingModule,
    ImageCropperModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAdministratorComponent,
    EditAdministratorComponent,
    EditAboutComponent,
    ImageUploaderComponent,
    DetailOrderComponent,
    AcceptedOrderComponent]
})
export class AppModule { }
