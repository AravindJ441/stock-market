import { Routes } from '@angular/router';
import { AppManagementComponent } from './app-management.component';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';




export const AppManagementRoutes: Routes =[

    {
        path: '',
        redirectTo:'app-management',
        pathMatch:'full'
    },
    {
        path: 'app-management',
        canActivate:[AuthGuard],
        component:AppManagementComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent}
        ]

    }

]