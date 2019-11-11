import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Module = ({title})  =>

<a className="nav-link d-flex justify-content-between wbdv-module-item wbdv-module-item-title" 
    id="v-pills-home-tab" 
    data-toggle="pill" 
    href="#v-pills-home" 
    role="tab" 
    aria-controls="v-pills-home" 
    aria-selected="true">
    {title}

    <span className="nav-item close-icon">
        <FontAwesomeIcon className="wbdv-close"
                         icon={faTimes}/>
    </span>
</a>


export default Module;