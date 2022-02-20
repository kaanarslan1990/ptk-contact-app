import {useEffect, useState} from 'react'
import Form from './Form';
import List from './List';
import  './styles.css';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Kaan",
            phone_number: "32158"
        },
        {
            fullname:"Mehmet",
            phone_number: "741258"
        },
        {
            fullname:"Ayşe",
            phone_number: "785258"
        },
    ]);
    
    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
  return (
    <div id="container">
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;