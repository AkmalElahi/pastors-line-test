import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomModal from "../../components/Modal/Modal";
import { getContacts } from "../../redux/actions/contactsActions";
import { closeModalB, showModalB } from "../../redux/actions/ModalActions";

function ModalB() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const modalB = useSelector((state) => state.modalB);

  const history = useHistory();

  useEffect(() => {
    dispatch(getContacts("", 1));
    dispatch(showModalB());
  }, [dispatch]);

  const handleCloseB = useCallback(() => {
    dispatch(closeModalB());
    history.push("/");
  }, [dispatch, history]);

  const handleShowA = useCallback(() => {
    history.push("/modalA");
  }, [history]);

  return (
    <CustomModal
      contacts={contacts}
      show={modalB.show}
      handleShowA={handleShowA}
      handleClose={handleCloseB}
      title="Modal B"
    />
  );
}

export default ModalB;
