import { Contact } from "./class/contact.class";

interface SMSProps {
    contacts: Contact[];
}

interface SMSState {
    contacts: Contact[];

}

interface AddContactState {
    name: string;
    phoneNumber: string;
    company: string;
}
