import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { List, Item, Button } from "./ContactList.styled";

export function ContactList({/*contacts, onDelete*/ }) {
    const contacts = useSelector((state) => state.items);
    return (
        <List>
            {contacts.map(({id, name, number}) => (
                <Item key={id}>
                    {name}: {number}
                    <Button
                        // onClick={() => onDelete(id)}
                    >
                        Delete
                    </Button>
                </Item>
            ))}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })),
    // onDelete: PropTypes.func,
}

// export default ContactList;