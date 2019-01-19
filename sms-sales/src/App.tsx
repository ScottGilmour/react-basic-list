import * as React from 'react';
import './App.css';

import { Contact } from './class/contact.class';

import logo from './logo.svg';
import { ContactList } from './components/contacts-list/contacts-list';
import { SMSProps, SMSState, AddContactState } from './interfaces';
import { AddContact } from './components/add-contact/add-contact';

class App extends React.Component<SMSProps, SMSState> {

  constructor(props: any) {
    super(props);
    this.state = {
      contacts: []
    }

    this.handleNewContact = this.handleNewContact.bind(this);
  }
  
  public componentDidMount() {
    
    const contact: Contact = new Contact();
    contact.name = 'Frank Sherbet';
    contact.company = 'Dunder Mifflin';
    contact.phoneNumber = '9052205327';

    
    this.setState({contacts: [contact]});
  }

  private handleNewContact(contactInfo: AddContactState) {
      let contact: Contact = new Contact();
      contact.name = contactInfo.name;
      contact.company = contactInfo.company;
      contact.phoneNumber = contactInfo.phoneNumber;

      
      this.setState({
        contacts: [...this.state.contacts, contact]
      });
  }

  public render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <AddContact 
            onNewContact={this.handleNewContact}

          
          />
          
          <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
