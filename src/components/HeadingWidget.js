import React , { useState } from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import widgetService from "../services/WidgetService"
const services = widgetService.getInstance();

const HeadingWidget = ({widget , deleteWidget, updateWidget, moveUpWidget , moveDownWidget}) =>
    {
    const [value, setValue] = useState("");
    const handleChange = event => {setValue(event.target.value);
    widget.text = value;
}
    const [type, setType] = useState("");
    const handleType = event => {setType(event.target.value);
    console.log(type);
    widget.type = type;
}
        return(
<div className="table table-bordered aa-table">
    <div class="row justify-content">
        <div class="col-7">

                <h5 className="aa-Heading-widget-title">
                    Heading Widget
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
        <div className="col-12 aa-input">
            <div>
                <input className="form-control"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        id="HeadingText"
                        placeholder="Heading text"/>
            </div>

        </div>
        <div className="col-12 aa-input">
            <div>
                <select className="form-control">
                    <option value="H1">
                        Heading 1
                    </option>
                    <option value="H2">
                        Heading 2
                    </option>
                    <option value="H3">
                        Heading 3
                    </option>
                </select>
            </div>
        </div>
        
        <div className="col-12 aa-input">
                <div>
                    <input className="form-control"
                            id="WidgetName"
                            placeholder="Widget Name"/>
            </div>
        </div>
        <div className="d-flex justify-content-end">
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
                            updateWidget(newWidget);
                        }
                    }>
                        save
            </button>
        </div>
        
        
        <h6>Preview</h6>
        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
</div>
        );
    }


export default HeadingWidget