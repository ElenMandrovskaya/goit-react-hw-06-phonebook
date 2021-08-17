// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Button } from "./ContactList.styled";
import { removeContact } from "../../redux/contacts/contacts-actions";



export function ContactList() {
    const contacts = useSelector((state) =>
        // state.items
         state.items.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase()))  
    );
    const dispatch = useDispatch();

    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    {name}: {number}
                    <Button onClick={() => dispatch(removeContact(id))}>
                        Delete
                    </Button>
                </Item>
            ))}
        </List>
    )
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string,
//         number: PropTypes.string,
//     })),
//     // onDelete: PropTypes.func,
// }
