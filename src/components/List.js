import React from 'react';
import Lists from './Lists';
import { connect } from 'react-redux';
const List = (props) => {
    const { contacts, filter, filterdContact } = props;
    console.log(props);
    return (
        <div className="mt-5 ml-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="row bg-grey py-2">
                        <div className="col-md-1">
                            <i className="fa fa-plus mr-2 pt-1 in-lpus" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-5">
                            <p className="h6 pt-1 text-muted">Basic Info</p>
                        </div>
                        <div className="col-md-5">
                            <p className="h6 pt-1 text-muted">Company</p>
                        </div>
                    </div>
                    {(filter) ? (
                        filterdContact.map(({ name, email, company }, id) => (
                            <Lists name={name} email={email} company={company} key={id} />
                        ))
                    ) :
                        (contacts) ? (
                            contacts.map(({ name, email, company }, id) => (
                                <Lists name={name} email={email} company={company} key={id} />
                            ))
                        ) : 'No Contacts'}
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
        filter: state.contacts.isFilterOn,
        filterdContact: state.contacts.filteredContacts
    }
}

export default connect(mapStateToProps)(List);