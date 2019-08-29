import React from 'react';
import InputForm from './InputForm';
import List from './List';

const Content = () => {
    return (
        <div className="main">
            <div className="container-fluid">
                <div className="d-flex">
                    <i className="fa fa-search text-secondary mt-3" aria-hidden="true"></i>
                    <div className="ml-auto d-flex right-nav">
                        <p className="mr-4 h6"> <i className="fa fa-plus mr-2" aria-hidden="true"></i>Add</p>
                        <p className="mr-4"> <i className="fa fa-envelope-o" aria-hidden="true"></i></p>
                        <form className="mr-4">
                            <div className="form-group">
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Mark Henry</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </form>
                        <p className="mr-2"><i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                <hr />
                <div className="contact-header mt-4">
                    <div className="row">
                        <div className="col-md-1 text-right mt-2">
                            <i className="fa fa-user mt-2" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-10 contact">
                            <div className="d-flex">
                                <div className="mr-4">
                                    <h4 className="h4">Contacts</h4>
                                    <small className="text-muted">Welcome to Contact Page</small>
                                </div>
                                <div className="pt-3">
                                    <small className="text-muted">Sort By:</small>
                                    <small className="ml-2 text-dark h5 fs-15">Date Created <i className="fa fa-caret-down" aria-hidden="true"></i></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <InputForm />
                <List />
            </div>
        </div>
    );
}

export default Content;