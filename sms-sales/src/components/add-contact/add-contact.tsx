import * as React from 'react';
import { AddContactState } from 'src/interfaces';






export class AddContact extends React.Component<any, AddContactState> {
    constructor(props: any) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    private handleChange(event: any, key: any) {
        switch (key) {
            case 'name':
            this.setState({name: event.target.value});
            break;

            case 'phone':
            this.setState({phoneNumber: event.target.value});
            break;

            case 'company':
            this.setState({company: event.target.value});
            break;
        }
    }

    private handleAddContact(event: any) {
        event.preventDefault();
        this.props.onNewContact(this.state);
    }

    public render() {
        //Just render out a basic form man
        return (
            <div className="addContactForm">
                <form onSubmit={this.handleAddContact}>
                    <label>
                        Name
                        <input type="text" name="contactName" id="contactName" placeholder="John Smith" onChange={(e) => this.handleChange(e, 'name')} />
                    </label>

                    <label>
                        Company
                        <input type="text" name="contactCompany" id="contactCompany" placeholder="Acme Co" onChange={(e) => this.handleChange(e, 'company')} />
                    </label>

                    <label>
                        Phone
                        <input type="text" name="contactPhone" id="contactPhone" placeholder="123 456 7890" onChange={(e) => this.handleChange(e, 'phone')} />
                    </label>

                    <input type="submit" value="Add Contact"/>
                </form>
            </div>
        );
    }
}