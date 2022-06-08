import { Item, ButtonDelete } from "./ContactItem.styles";

function ContactItem({ name, number, onDeleteContact, id }) {
  return (
    <Item>
      {name}
      <p>( {number} )</p>
      <ButtonDelete type="submit" onClick={() => onDeleteContact(id)}>
        delete
      </ButtonDelete>
    </Item>
  );
}
export default ContactItem;
