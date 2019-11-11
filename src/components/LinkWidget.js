import React , { useState } from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import widgetService from "../services/WidgetService"
const services = widgetService.getInstance();

const LinkWidget = ({widget , deleteWidget , updateWidget , moveUpWidget , moveDownWidget}) =>
    {
    const [value, setValue] = useState("");
    const [link, setLink] = useState("");
    const handleLink = event => {setLink(event.target.value); console.log(link)}
    const handleChange = event => {setValue(event.target.value); console.log(value);}
    const [type, setType] = useState("");
    const handleType = event => {setType(event.target.value);
    console.log(type);
    widget.type = type;
}
    return(
<div class="table table-bordered aa-table">
        <div class="row justify-content">
            <div class="col-7">

                <h5 class="aa-Heading-widget-title">
                    Link Widget
                </h5>

            </div>
            <div className="row col-auto">
                    <button type="button" 
                            className="btn btn-warning"
                            onClick={moveUpWidget}>
                            <FontAwesomeIcon className="wbdv-close" 
                                             icon={faArrowUp}/>
                    </button>
                    <button type="button" 
                            className="btn btn-warning"
                            onClick={moveDownWidget}>
                            <FontAwesomeIcon className="wbdv-close" 
                                                icon={faArrowDown}/>
                    </button>
                    
                    <select className="form-control custom-select mr-sm-2"
                        onChange = {handleType}
                        value = {widget.type}>
                        <option value="HEADING">
                            Heading
                        </option>
                        <option value="PARAGRAPH">
                            Paragraph
                        </option>
                        <option value="IMAGE">
                            Image
                        </option>
                        <option value="LIST">
                            List
                        </option>
                        <option value="LINK">
                            Link
                        </option>
                    </select>

                    <button type="button" 
                            className="btn btn-danger"
                            onClick={deleteWidget}>
                                 <FontAwesomeIcon className="wbdv-close" 
                                         icon={faTimes}/>
                    </button>
            </div>  
        </div>
        <div class="col-12 aa-input">
            <div>
                <input class="form-control"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        id="LinkText"
                        placeholder="Link text"/>
            </div>
        </div>
        <div class="col-12 aa-input">
            <div>
                <input class="form-control"
                        type=""
                        value={link}
                        onChange={handleLink}
                        id="LinkUrl"
                        placeholder="LinkUrl"/>
            </div>
        </div>
        <div class="col-12 aa-input">
                <div>
                    <input class="form-control"
                            id="WidgetName"
                            placeholder="Widget Name"/>
            </div>
        </div>
        <button type="button" 
                    className="btn btn-primary"
                    onClick={
                        ()=>{
                            let newWidget = {
                                "name": widget.name,
                                "id": widget.id,
                                "type": widget.type,
                                "order": widget.order,
                                "text": widget.text,
                                "href": widget.href,
                                "size": widget.size
                            }
                            console.log(newWidget)
                            services.updateWidget(newWidget);
                        }
                    }>
                        save
            </button>
        <h6>Preview</h6>

        <a href={link} >{value}</a>
       
</div>
        );
    }


export default LinkWidget