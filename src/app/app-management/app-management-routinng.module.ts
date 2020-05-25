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
        component:AppManagementComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', component: DashboardComponent}
        ]

    }

]