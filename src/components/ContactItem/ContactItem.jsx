import { Item, ButtonDelete } from "./ContactItem.styles";
import { AiFillDelete } from "react-icons/ai";

function ContactItem({ name, number, onDeleteContact, id }) {
  return (
    <Item>
      {name}
      <p>( {number} )</p>
      <ButtonDelete type="submit" onClick={() => onDeleteContact(id)}>
        DELETE
        <AiFillDelete size="1.2rem" />
      </ButtonDelete>
    </Item>
  );
}
export default ContactItem;
