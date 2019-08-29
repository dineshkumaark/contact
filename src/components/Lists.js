import React from 'react';
import { CustomInput } from 'reactstrap';
const Lists = (props) => {
    const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
    const random = Math.floor(Math.random() * colors.length);
    const { name, email, company } = props;
    return (
        <div>
            <div className="row py-4">
                <div className="col-md-1">
                    <CustomInput type="checkbox" id="exampleCustomCheckbox" className="pt-3" />
                </div>
                <div className="col-md-5">
                    <div className="d-flex">
                        <div className={`img mr-3 ${colors[random]}`}><p className="h4 text-center mt-2 text-white">{(name.toUpperCase()).slice(0, 1)}</p></div>
                        <div className="info-detail">
                            <p className="h6 pt-1">{name}</p>
                            <small className="text-muted">{email}</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <p className="h6 pt-3">{company}</p>
                </div>

            </div>
        </div>
    )
}

export default Lists;