import { Routes } from '@angular/router';
//guard

import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { StoriesComponent } from './stories/stories.component';
import { OrderComponent } from './order/order.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'testimoni',
        component: TestimoniComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'portofolio',
        component: PortofolioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'stories',
        component: StoriesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'order',
        component: OrderComponent,
        canActivate: [AuthGuard]
    }
];
