import PropTypes from "prop-types";
import { Input, Label, ButtonAdd, Icon } from "./Form.styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "../../redux/action";
import { toast, ToastContainer } from "react-toastify";
import { AiFillFolderOpen } from "react-icons/ai";

import { getContacts } from "../../redux/items-selector";

export default function Form() {
  const contacts = useSelector(getContacts);
  console.log("contacts", contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const returnName = contacts.find((contact) => contact.name === name);
    if (returnName) {
      toast.warn("This name is already in the phonebook ");
    } else {
      // console.log("contact------------------------", contact);

      dispatch(addContacts({ name, number }));

      toast(({ data }) => `Added ${name} in Phonebook`, {
        data: "world",
      });
    }

    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
          <ButtonAdd type="submit">
            Add contact
            <Icon>
              <AiFillFolderOpen size="1rem" />
            </Icon>
          </ButtonAdd>
        </Label>
      </form>
      <ToastContainer closeButton={false} />
    </>
  );
}
Form.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};
// class Form extends Component {
// static defaultProps = {
//    onSubmit:PropTypes.func.isRequired,
//   }

//   state = {
//     name: '',
//     number:'',
//   }

//   handleInputChange =  e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });;
//   };

//  onSubmitForm=(e)=> {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();

//   }

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return ( <>
//       <form onSubmit={this.onSubmitForm}>
//         <Label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//               </Label>
//             <Label> Number
//                     <Input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//                onChange={this.handleInputChange}
//                     />
//                     <ButtonAdd type="submit">Add contact</ButtonAdd>
//                 </Label>
//       </form>
//     </>);
//   }
// }

// export default Form;

// // const Form = ({ onSubmit }) => {
// //   function onSubmitForm(event) {
// //     event.preventDefault();
// //     onSubmit({
// //       id: nanoid(),
// //       name: event.target[0].value,
// //       number: event.target[1].value,
// //       event,
// //     });
// //   }

// //   return (
// //     <>
// //       <form onSubmit={onSubmitForm}>
// //         <Label>
// //           Name
// //           <Input
// //             type="text"
// //             name="name"
// //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// //             required
// //           />
// //               </Label>
// //             <Label> Number
// //                     <Input
// //                         type="tel"
// //                         name="number"
// //                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// //                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// //                         required
// //                     />
// //                     <ButtonAdd type="submit">Add contact</ButtonAdd>
// //                 </Label>
// //       </form>
// //     </>
// //   );
// // };

// // export default Form;
