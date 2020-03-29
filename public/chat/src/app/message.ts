import { User } from './user';
import { getLoggedInUser } from './login/login.service';
import _ from 'lodash';

export class Message {
    public content: string;
    public author: User;
    public timestamp: number;
    constructor(content: string = '', author: any = {}, timestamp: number = new Date().getTime()) {
        this.content = content;
        if (_.isEmpty(author)) {
            author = new User(getLoggedInUser());
        }
        this.author = new User(author);
        this.timestamp = timestamp;
    }

    toJson(): any {
        return {
            content: this.content,
            author: this.author,
            timestamp: this.timestamp
        };
    }
}
