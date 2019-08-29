import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_MODAL, FILTER, FILTERED_CONTACT } from './actionTypes/index';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddForm from './AddForm';
class InputForm extends Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleInput = (e) => {
        let { value } = e.target;
        (value.length >= 1) ? this.props.filterOn(true) : this.props.filterOn(false)
        let { filteredContacts } = this.props;
        console.log(this.props.filter);
        const { contacts, isFilterOn } = this.props;
        value = value.toLowerCase();
        if (value.length >= 1) {
            console.log(value);
            filteredContacts = contacts.filter((contact) => ((contact.name).toLowerCase()).includes(value));
            this.props.filterContact(filteredContacts)
        } else {
            this.props.filterContact('');
        }
    }
    closeBtn = (e) => {
        e.preventDefault();
        this.toggle();
    }
    render() {
        console.log(this.props);
        return (
            <div className="input-group my-3 px-5">
                <div className="search-box mt-2 ml-5 d-flex">
                    <input type="text" className="form-control mt-1" placeholder="Search Contacts" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInput} />
                    <i className="fa fa-search text-secondary" aria-hidden="true"></i>
                    <button type="button" className="btn btn-primary ml-4" onClick={this.toggle}> <i className="fa fa-plus mr-2" aria-hidden="true"></i>Add Contact</button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Contact</ModalHeader>
                        <ModalBody>
                            <AddForm closeBtn={this.toggle} />
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        contacts: state.contacts.contacts,
        filter: state.contacts.isFilterOn,
        filteredContacts: state.contacts.filteredContacts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => dispatch({ type: TOGGLE_MODAL }),
        filterOn: (data) => dispatch({ type: FILTER, payload: data }),
        filterContact: (data) => dispatch({ type: FILTERED_CONTACT, payload: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputForm);