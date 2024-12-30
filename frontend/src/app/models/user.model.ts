import { Filestorage } from "./filestorage.model";

export class UserModel {
    firstname!: string;
    lastname!: string;
    birth_date?: Date;
    gender?: string;
    phone_number?: string;
    country!: string;
    credit_card?: string;
    CVC_card?: string;
    filestorage_id?: number;
    filestorage?: Filestorage;
}