import * as React from 'react';

import { SMSProps, SMSState } from 'src/interfaces';



export class ContactList extends React.Component<SMSProps, SMSState> {
    
    constructor(props: any) {
        super(props);
    }
    
    public render() {
        if (!this.props.contacts) {
            return (<ul><li>No Contacts!</li></ul>);
        }
        
        let contactList = this.props.contacts.map(contact => <li>{contact.name}</li>)
        return (
            <ul>
                {contactList}
            </ul>
        );
    }
}