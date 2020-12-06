export class User {
    constructor(
        public username: string,
        public password: string,
        public email: string,
        public firstName: string,
        public lastName: string,
        public age: number,
        public phone: string,
        public garden: {
            plants: string[]
        }
    ) {
    }
}