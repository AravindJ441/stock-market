import { Component } from "@angular/core";


@Component({
    selector:'app-management',
    templateUrl: './app-management.component.html',
    styleUrls:['./app-management.component.scss']
})

export class AppManagementComponent {
navTabs :any[] = [
    {
        name:'Dashboard',
        path: ''
    },
    {
        name : 'DashboardTwo',
        path: ''
    },
    {
        name: 'DashboardThree',
        path: ''
    }
]
    constructor() {}
    ngOnInit() {

    }
    
}