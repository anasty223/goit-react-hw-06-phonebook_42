import { useState } from "react";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";
import Div from "./components/Container/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // const normalazedFilter = filter.toLowerCase();
  // export const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(normalazedFilter)

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  // const deleteContact = (contactId) => {
  //   setContacts((contacts) =>
  //     contacts.filter((contact) => contact.id !== contactId)
  //   );
  // };

  return (
    <Div>
      <h1>Phonebook</h1>

      <Form />

      <Filter value={filter} onChange={changeFilter} />
      <h2>Contacts</h2>
      <ContactsList />
      <ToastContainer />
    </Div>
  );
}

// class oldApp extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };
//   componentDidMount() {
//     console.log("App componentDidMount");

//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("App componentsDidUpdate");
//     if (this.state.contacts !== prevState.contacts) {
//       console.log("обновилось поле контакт ");

//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };
// formSubmitHandler = ({ name, number }) => {
//   const { contacts } = this.state;
//   const ReturnName = contacts.find((contact) => contact.name === name);
//   if (ReturnName) {
//     alert("This name is already in the phone book ");
//   } else {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     console.log(contact);
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   }
// };

//   render() {
// const { filter } = this.state;

// const normalazedFilter = this.state.filter.toLowerCase();
// const visibleContacts = this.state.contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(normalazedFilter)
// );
//     return (
//       <Div>
//         <h1>Phonebook</h1>

//         <Form onSubmit={this.formSubmitHandler} />

//         <Filter value={filter} onChange={this.changeFilter} />
//         <h2>Contacts</h2>
//         <ContactsList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Div>
//     );
//   }
// }

// export default oldApp;
