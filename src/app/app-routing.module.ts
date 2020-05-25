import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo:'app-home',
    pathMatch:'full'
  },
  {
    path:'app-home',
    canActivate: [AuthGuard],
    loadChildren: "src/app/app-management/app-management.module#AppManagementModule"
  },
  {
    path: 'auth',
    loadChildren: "src/app/authentication/authentication.module#AuthenticationModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
