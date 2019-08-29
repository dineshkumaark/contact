import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { ADD_CONTACT } from './actionTypes';
const AddForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const { closeBtn } = props;
    useEffect(() => {
        console.log(name, email, company);
    }, [])
    const handleInput = (e) => {
        switch (e.target.name) {
            case 'setName':
                return setName(e.target.value);
            case 'setEmail':
                return setEmail(e.target.value);
            case 'setCompany':
                return setCompany(e.target.value);
            default:
                return;
        }
    }
    const onAdd = (e) => {
        e.preventDefault();
        closeBtn();
        console.log(name, email, company);
        const newData = { name, email, company };
        props.addContact(newData);
        console.log(props.contacts);
    }
    return (
        <form onSubmit={onAdd} method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your Name..."
                    value={name}
                    onChange={handleInput}
                    name="setName"
                />
            </div>
            <div class="form-row mb-3">
                <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="setEmail"
                        placeholder="Enter your Email..."
                        value={email}
                        onChange={handleInput}
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="comapany">Company</label>
                    <input
                        type="text"
                        class="form-control"
                        id="comapany"
                        name="setCompany"
                        placeholder="Enter your Company name..."
                        value={company}
                        onChange={handleInput}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-5">Add Contact</button>
            <Button color="secondary" className="text-right" onClick={closeBtn}>Cancel</Button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (data) => dispatch({ type: ADD_CONTACT, payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);