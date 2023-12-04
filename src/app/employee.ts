import { User } from "./user";

export class Employee extends User{

    designation!: string;
    userName!: string;
    password!: string;
    status !: string;

    constructor(){
        super();
    }

}
