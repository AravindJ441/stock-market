import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authenticationRoutes } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
    declarations:[
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(authenticationRoutes)
    ],
    exports:[],
    entryComponents:[]
})


export class AuthenticationModule {

}