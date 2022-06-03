import PropTypes from "prop-types";
import { List, Item, Text, ButtonDelete } from "./ContactList.styles";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/action";

function ContactsList() {
  // const normalazedFilter = filter.toLowerCase();
  // export const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(normalazedFilter)

  const contacts = useSelector((state) => state.contacts);
  console.log("constacts", contacts);
  // const contact = {
  //   id: nanoid(),
  //   name,
  //   number,
  // };
  // console.log(contact);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>{name}</Text>
          <Text>{number}</Text>
          <ButtonDelete
            type="submit"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
}
export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
