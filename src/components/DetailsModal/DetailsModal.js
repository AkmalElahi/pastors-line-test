import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModalC } from "../../redux/actions/ModalActions";

function DetailsModal({ show }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.modalC);

  const handleClose = () => {
    dispatch(closeModalC());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Modal C</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item className="m-1">
            <div>ID: {data?.id}</div>
            <div>First Name: {data?.first_name}</div>
            <div>Last Name: {data?.last_name}</div>
            <div>Email: {data?.email}</div>
            <div>Phone: {data?.phone_number}</div>
            <div>country Id: {data?.country_id}</div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailsModal;
