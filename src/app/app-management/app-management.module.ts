import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppManagementRoutes } from './app-management-routinng.module';
import { AppManagementComponent } from './app-management.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
    declarations: [
        AppManagementComponent,
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(AppManagementRoutes),
        CommonModule
    ],
    exports:[],
    
})

export class AppManagementModule {}