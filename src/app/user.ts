import { Address } from "./address";

export class User {
    userId !: string;
    name !: string;
    email !: string;
    contactNo !: string;

    address : Address = new Address();

}
