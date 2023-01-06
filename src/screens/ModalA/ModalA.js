import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CustomModal from "../../components/Modal/Modal";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import { closeModalA, showModalA } from "../../redux/actions/ModalActions";
import { getContacts } from "../../redux/actions/contactsActions";

function ModalA() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const modalA = useSelector((state) => state.modalA);

  const modalC = useSelector((state) => state.modalC);

  const history = useHistory();

  useEffect(() => {
    dispatch(getContacts("", 1));
    dispatch(showModalA());
  }, [dispatch]);

  const handleShowB = useCallback(() => {
    history.push("/modalB");
  }, [history]);

  const handleCloseA = useCallback(() => {
    dispatch(closeModalA());
    history.push("/");
  }, [dispatch, history]);

  return (
    <>
      <CustomModal
        contacts={contacts}
        show={modalA.show}
        handleShowB={handleShowB}
        handleClose={handleCloseA}
        title="Modal A"
      />
      <DetailsModal show={modalC.show} />
    </>
  );
}

export default ModalA;
