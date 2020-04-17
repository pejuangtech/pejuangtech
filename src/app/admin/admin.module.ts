import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminLayoutRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { StoriesComponent } from './stories/stories.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    TestimoniComponent,
    PortofolioComponent,
    StoriesComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
  ]
})
export class AdminModule { }
