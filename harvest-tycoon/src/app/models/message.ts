export class Message {
    constructor(
        public from: string,
        public to: string,
        public subject: string,
        public message: string,
    ) { }
}