import React from 'react';

const SideBar = () =>{
    return(
        <div className="sidenav">
        <ul className="pl-2">
            <li className="text-white px-3 mb-3"><i className="fa fa-list
            text-danger mr-2" aria-hidden="true"></i></li>
            <li className="text-white px-3 mb-3"><i className="fa fa-refresh mr-2" aria-hidden="true"></i></li>
            <li className="text-white px-3 mb-3">__</li>
            <li className="text-white px-3 mb-3"><i className="fa fa-users mr-2" aria-hidden="true"></i></li>
            <li className="text-white px-3 mb-3"><i className="fa fa-arrow-right mr-2" aria-hidden="true"></i></li>
            <li className="text-white px-3 mb-3"><i className="fa fa-file-text mr-2" aria-hidden="true"></i></li>
            <li className="text-white px-3 mb-3"><i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i></li>
            <li className="text-white px-3 mb-3"><i className="fa fa-info mr-3" aria-hidden="true"></i></li>
        </ul>
    </div>
    );
}

export default SideBar;