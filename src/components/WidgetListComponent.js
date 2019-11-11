import React from 'react'
import HeadingWidget from "./HeadingWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ListWidget from "./ListWidget"
import ParagraphWidget from './paragraphWidget';
import ImageWidget from './ImageWidget';
import LinkWidget from "./LinkWidget"
class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.findAllItems();
    }
    render() {
        return(
            <div>
                <h1>Widgets {this.props.widgets.length}</h1>
            <ul>
            {
                this.props.widgets.map(widget =>
                    <div key = {widget.id}> 
                         {widget.widgetType === "LINK" && <LinkWidget widget={widget} 
                        deleteWidget = {()=>this.props.deleteWidget(widget.id)}
                        updateWidget = {()=> this.props.updateWidget(widget)}
                        moveUpWidget = {()=> this.props.moveUpWidget(widget)}
                        moveDownWidget = {()=> this.props.moveDownWidget(widget)}
                        />}
                         {widget.widgetType === "IMAGE" && <ImageWidget widget={widget} 
                        deleteWidget = {()=>this.props.deleteWidget(widget.id)}
                        updateWidget = {()=> this.props.updateWidget(widget)}
                        moveUpWidget = {()=> this.props.moveUpWidget(widget)}
                        moveDownWidget = {()=> this.props.moveDownWidget(widget)}
                        />}
                        {widget.widgetType === "PARAGRAPH" && <ParagraphWidget widget={widget} 
                        deleteWidget = {()=>this.props.deleteWidget(widget.id)}
                        updateWidget = {()=> this.props.updateWidget(widget)}
                        moveUpWidget = {()=> this.props.moveUpWidget(widget)}
                        moveDownWidget = {()=> this.props.moveDownWidget(widget)}
                        />}
                        {widget.widgetType === "LIST" && <ListWidget widget={widget} 
                        deleteWidget = {()=>this.props.deleteWidget(widget.id)}
                        updateWidget = {()=> this.props.updateWidget(widget)}
                        moveUpWidget = {()=> this.props.moveUpWidget(widget)}
                        moveDownWidget = {()=> this.props.moveDownWidget(widget)}
                        />}
                        {widget.widgetType === "HEADING" && 
                        <HeadingWidget widget={widget} 
                        deleteWidget = {()=>this.props.deleteWidget(widget.id)}
                        updateWidget = {()=> this.props.updateWidget(widget)}
                        moveUpWidget = {()=> this.props.moveUpWidget(widget)}
                        moveDownWidget = {()=> this.props.moveDownWidget(widget)}
                        />}
                    </div>
                )
            }
            </ul>
            <div class="d-flex justify-content-end">
            <row>
                <button type="button" 
                        class="btn btn-danger"
                        onClick={()=>this.props.addWidget()}>
                       <FontAwesomeIcon className="wbdv-close" 
                                        icon={faPlus}/>
                </button>
            </row>
        </div>
    </div>
        )
    }
}
export default WidgetListComponent;