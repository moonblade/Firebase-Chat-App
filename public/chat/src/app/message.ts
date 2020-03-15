export class Message {
    public content: string;
    constructor(content: string = '') {
        this.content = content;
    }

    toJson(): any {
        return {
            content: this.content
        };
    }
}
