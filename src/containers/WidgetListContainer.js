import React from 'react'
import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'
import widgetService from "../services/WidgetService"
const services = widgetService.getInstance();

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets
    }
}

const dispatcherToPropertyMapper = dispatch => {
    return {
        findAllItems:()=>findAllWidgets(dispatch),
        addWidget: () => addWidget(dispatch),
        deleteWidget: (id) => deleteWidget(dispatch , id),
        updateWidget: (widget) => updateWidget(dispatch , widget),
        moveUpWidget: () => moveWidgetUp(dispatch),
        moveDownWidget: () => moveWidgetDown(dispatch)
    }
}
let API_URL = "https://wbdv-f19-a2hb-server-jpa.herokuapp.com/";
const findAllWidgets = dispatch => {
    fetch(API_URL+'findWidgets')
      .then(response => (response.json()))
      .then(items => dispatch({
   type: 'FIND_ALL_WIDGETS',
   items: items }))
}
const addWidget = dispatch => {
    let newWidget = {
        "name": "test widget",
        "widgetType": "HEADING",
        "widgetOrder": 0,
        "text": "new widget",
        "href": "",
        "size": 2
    }
    services.createNewWidget(newWidget);
    findAllWidgets(dispatch);
}
const deleteWidget = (dispatch,id) =>{
    services.deleteWidget(id);
    findAllWidgets(dispatch);
}
const updateWidget = (dispatch, widget) =>{
    services.updateWidget(widget);
    findAllWidgets(dispatch);
}
const moveWidgetUp = dispatch =>{
    services.moveUp();
    findAllWidgets(dispatch);

}
const moveWidgetDown = dispatch =>{
    services.moveDown();
    findAllWidgets(dispatch);
}
   
const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent)

export default WidgetListContainer;