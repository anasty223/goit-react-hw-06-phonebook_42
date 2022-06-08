import { useState } from "react";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";
import Div from "./components/Container/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Div>
      <h1>Phonebook</h1>

      <Form />

      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
      <ToastContainer />
    </Div>
  );
}
