import { LoginService } from './login/login.service';

export class User {
    public uid: string;
    public displayName: string;
    public photoURL: string;
    public email: string;
    public phoneNumber: string;
    constructor(userObj: any = {}) {
        // if (userObj.keys().length() === 0) {
            // userObj = LoginService.getLoggedInUser();
        // }
        this.uid = userObj.uid;
        this.displayName = userObj.displayName;
        this.photoURL = userObj.photoURL;
        this.email = userObj.email;
        this.phoneNumber = userObj.phoneNumber;
    }
}
