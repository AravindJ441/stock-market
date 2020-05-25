import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()

export class AuthenticationService {
    authId: Subject<any> =new Subject();


    setIdOfUser (id) {
        this.authId = id
    }
    getIdOfUser() {
        return this.authId;
    }
    
}