import { useCallback, useEffect, useRef, useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import { getContacts, updatePage } from "../../redux/actions/contactsActions";
import { showModalC } from "../../redux/actions/ModalActions";
import Button from "../Button/Button";

function CustomModal({
  title,
  show,
  handleClose,
  handleShowA,
  handleShowB,
  contacts,
}) {
  const dispatch = useDispatch();

  const scroll = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !contacts.loading) {
      dispatch(getContacts(searchTerm));
    }
  };

  useEffect(() => {
    if (!contacts.loading && searchTerm.length) {
      const delayDebounceFn = setTimeout(() => {
        dispatch(getContacts(searchTerm));
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [contacts.loading, dispatch, searchTerm]);

  const handleClick = useCallback(
    (contact) => () => {
      dispatch(showModalC(contact));
    },
    [dispatch]
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleScroll = (values) => {
    const { scrollTop, scrollHeight, clientHeight } = values;
    const topValue = scrollTop / (scrollHeight - clientHeight);
    if (topValue === 1) {
      clearTimeout(scroll.current);
      scroll.current = setTimeout(() => {
        if (!contacts.loading) {
          dispatch(updatePage(contacts.page + 1));
          dispatch(getContacts("", contacts.page + 1));
        }
      }, 300);
    }
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <Form.Control
            placeholder="Search Contact"
            aria-label="Search Contact"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            onKeyUp={handleKeyPress}
          />
        </InputGroup>
        <Scrollbars autoHeight autoHeightMax={700} onUpdate={handleScroll}>
          {contacts?.contacts?.map((contact, index) => (
            <ListGroup key={index} onClick={handleClick(contact)}>
              <ListGroup.Item className="m-1">
                <div>Email: {contact.email}</div>
                <div>Phone: {contact.phone_number}</div>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Scrollbars>
        <Button type="btn-a" text="All Contacts" onClick={handleShowA} />

        <Button type="btn-b" text="US Contacts" onClick={handleShowB} />
        <Button type="btn-c" text="Close" onClick={handleClose} />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
