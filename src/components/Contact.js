import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Detail from './Detail'


const ContactDetails = ({ isShowContactDetail, details, setShowContactDetail }) => {
    const history = useHistory()
    return (<Modal
        show={isShowContactDetail}
        onHide={() => setShowContactDetail(false)}
        aria-labelledby='contained-modal-title-vcenter'
        centered
    >
        <Modal.Body>
            <h2>Contact Detail</h2>
            {details !== null && (
                <Detail selectedContact={details} />
            )}
        </Modal.Body>
        <div className='single-btn'>
            <Button
                className='close-btn btn'
                onClick={() => {
                    history.push('/')
                    setShowContactDetail(false)
                }}
            >
                Close
            </Button>
        </div>
    </Modal>)
}

export default ContactDetails