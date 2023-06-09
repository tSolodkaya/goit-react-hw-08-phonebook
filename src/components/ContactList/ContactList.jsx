import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ContactList;
