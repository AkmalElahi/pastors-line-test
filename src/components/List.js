import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect, } from 'react-redux';
import { getContacts } from '../redux/actions/contacts';
import { Table, Spinner } from 'react-bootstrap';


class List extends Component {
	state = {
		isFetching: false,
		page: 0,
		prevY: 0

	}

	shouldShowContact = (contact) => {
		return this.props.isShowEvenContact ? contact.id % 2 === 0 : true;
	};
	queryContact = (contact) => {
		return this.props.query
			? (contact.first_name && contact.first_name.includes(this.props.query)) ||
			(contact.last_name && contact.last_name.includes(this.props.query))
			: true;
	};
	componentDidMount() {
		// this.getPhotos(this.state.page);
		var options = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0
		};

		this.observer = new IntersectionObserver(
			this.handleObserver.bind(this),
			options
		);
		this.observer.observe(this.loadingRef);
	}
	handleObserver(entities, observer) {
		const y = entities[0].boundingClientRect.y;
		// alert(y)
		if (this.state.prevY > y) {
			// alert(entities)
			const curPage = this.state.page + 1;
			this.props.getContacts({
				companyId: 171,
				page: curPage + 1,
				query: this.props.query,
			})
			this.setState({ page: curPage });
		}
		this.setState({ prevY: y });
	}
	render() {
		const {
			showContactDetail,
			contacts,
		} = this.props
		return (
			<>
				<ul className='list-group mb-2' >

					<div style={{ maxHeight: '600px', overflow: 'auto' }} >
						<Table striped bordered hover responsive  >
							<thead>
								<tr>
									<th>ID</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Email</th>
									<th>Country</th>
								</tr>
							</thead>
							<tbody>
								{contacts
									.filter(this.shouldShowContact)
									.filter(this.queryContact)
									.map((contact, index) => (
										<tr key={index} onClick={() => showContactDetail(contact)}>
											<td>{contact.id}</td>
											<td>{contact.first_name}</td>
											<td>{contact.last_name}</td>
											<td>{contact.email}</td>
											<td>{contact.country.iso}</td>
										</tr>
									))}
							</tbody>
						</Table>
						<div
							ref={loadingRef => (this.loadingRef = loadingRef)}
						>
							<span >Loading...</span>
						</div>
					</div>
				</ul>
			</>
		);
	}
}
const mapDispathToProps = (dispatch) => ({
	getContacts: (data) => dispatch(getContacts(data))
})
export default connect(null, mapDispathToProps)(List);
