import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getContacts } from '../redux/actions/contacts';
import ContactDetails from './Contact';
import List from './List';

const AllContactsModal = ({ setShowAllContactModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [show, setModal] = useState(false);
    const [isShowEvenContact, setShowEventContact] = useState(false);
    const [isShowContactDetail, setShowContactDetail] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [query, setQuery] = useState('');
    const showContactDetail = (contact) => {
        setModal(false)
        setShowContactDetail(true)
        setSelectedContact(contact);
    };
    const [page, setPage] = useState(1);
    const contacts = useSelector((state) => state.contacts.contacts);
    useEffect(() => {
        dispatch(
            getContacts({
                companyId: 171,
                page: 1,
            })
        );
        setModal(true)
    }, []);
    const handleQuery = (e) => {
        setQuery(e.target.value);
    };
    const handleShowEvenContact = () => {
        setShowEventContact(!isShowEvenContact);
    };
    return (<>
        <Modal
            size='xl'
            show={show}
            onHide={() => setModal(false)}
            aria-labelledby='contained-modal-title-vcenter'
            centered

        >
            <Modal.Body >
                <div className='modal-header'>
                    <h2>All contacts</h2>
                    <input
                        type='text'
                        id='search-contact'
                        name='search-contact'
                        value={query}
                        onChange={handleQuery}
                        placeholder='Search Contact'
                    />
                </div>
                {Boolean(contacts.length) ?
                    (<List
                        showContactDetail={showContactDetail}
                        contacts={contacts}
                        page={page}
                        setPage={setPage}
                        query={query}
                        isShowEvenContact={isShowEvenContact}
                    />)
                    : <div>Loading....</div>
                }
            </Modal.Body>

            <div className='btn-groups'>
                <Link to='/all'>
                    <Button
                        className='all-contacts btn mr-10'
                    >
                        All Contacts
            </Button>
                </Link>
                <Link to='/us'>
                    <Button className='us-contacts btn'
                    >
                        US Contacts
            </Button>
                </Link>
                <Button
                    className='close-btn btn'
                    onClick={() => {
                        history.push('/')
                        setModal(false)
                    }}
                >
                    Close
        </Button>
            </div>
            <Modal.Footer>
                <input
                    type='checkbox'
                    id='only-even'
                    name='evencontacts'
                    checked={isShowEvenContact}
                    onChange={handleShowEvenContact}
                />
                <label htmlFor='only-even'> Only even</label>
            </Modal.Footer>
        </Modal>
        <ContactDetails isShowContactDetail={isShowContactDetail} showContactDetail={showContactDetail} details={selectedContact} setShowContactDetail={setShowContactDetail} />
    </>)
}

export default AllContactsModal